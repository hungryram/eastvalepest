'use client'
import { Disclosure } from '@headlessui/react'
import { FaCaretUp } from 'react-icons/fa'
import ContentEditor from '../util/content-editor'
import HeaderSection from './header-section'

interface Props {
    disclosure: any;
    disclosureBackgroundColor: any;
    disclosureTextColor: any;
    disclosureContentColor: any;
    backgroundStyles: any;
    content: any;
    textAlign: string;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    paddingTop: string;
    paddingBottom: string;
    isFaq: boolean;
}

interface Block {
    _type: string;
    children?: BlockChild[];
}

interface BlockChild {
    text: string;
}

export default function DisclosureSection({
    disclosure,
    disclosureBackgroundColor,
    disclosureTextColor,
    disclosureContentColor,
    backgroundStyles,
    content,
    textAlign,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    paddingTop,
    paddingBottom,
    isFaq
}: Props) {

    function toPlainText(blocks: Block[] = []): string {
        return blocks
            .map((block: Block) => {
                if (block._type !== 'block' || !block.children) {
                    return '';
                }
                return block.children.map((child: BlockChild) => child.text).join('');
            })
            .join('\n\n');
    }


    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": disclosure.map((node: any) => ({
          ...{
            "@type": "Question",
            "name": node?.heading || "",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": toPlainText(node?.content) || ""
            }
          }
        }))
      };

      const styles = {
        paddingTop: paddingTop ?? '2rem',
        paddingBottom: paddingBottom ?? '2rem',
      }
    
      const allStyles = { ...backgroundStyles, ...styles }

    return (
        <>
            {isFaq && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
                />
            )}
            <div style={allStyles}>
                <div className="container">
                    {(content || primaryButtonLink || secondaryButtonLink) && (
                        <HeaderSection
                            content={content}
                            textAlign={textAlign}
                            // PRIMARY
                            buttonLink={primaryButtonLink}
                            primaryButtonText={primaryButtonText}
                            primaryButtonStyle={primaryButtonStyle}
                            // SECONDARY
                            secondaryButtonLink={secondaryButtonLink}
                            secondaryButtonText={secondaryButtonText}
                            secondaryButtonStyle={secondaryButtonStyle}
                        />
                    )}
                    <div className={` ${content && 'mt-16'}`}>
                        {disclosure?.map((node: any) => {
                            return (
                                <div className={`w-full`} key={node._key}>
                                    <div className="mx-auto w-full rounded-2xl my-2">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between px-4 py-4 text-left font-semibold" style={{
                                                        background: `${disclosureBackgroundColor?.hex ?? 'var(--primary-button-background)'}`,
                                                        color: `${disclosureTextColor?.hex ?? 'var(--primary-button-text)'}`
                                                    }}>
                                                        {node?.heading && <span>{node.heading}</span>}
                                                        <FaCaretUp
                                                            className={`${open ? 'rotate-180 transform' : ''
                                                                } h-5 w-5`}
                                                            style={{
                                                                color: `${disclosureTextColor?.hex ?? 'var(--primary-button-text)'}`
                                                            }}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 content" style={{
                                                        color: `${disclosureContentColor?.hex ?? '#000000'}`
                                                    }}>
                                                        {node.content &&
                                                            <ContentEditor
                                                                content={node.content}
                                                            />
                                                        }
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
