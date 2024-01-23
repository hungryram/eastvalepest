import ContentEditor from "../util/content-editor"
import HeaderSection from "./header-section";

interface Props {
    content: any,
    layoutType: string,
    heading: string,
    backgroundStyles: any,
    paddingTop?: string,
    paddingBottom?: string
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    textAlign: string;
}

export default function ContentSimple({
    content,
    layoutType,
    heading,
    backgroundStyles,
    paddingTop,
    paddingBottom,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonText,
    secondaryButtonLink,
    secondaryButtonStyle,
    textAlign
}: Props) {

    const styles = {
        paddingTop: paddingTop ?? '5rem',
        paddingBottom: paddingBottom ?? '5rem',
    }

    const allStyles = { ...backgroundStyles, ...styles }

    return (
        <div className="content" style={allStyles}>
            <div className={`${layoutType === 'twoColumn' && 'container'}`}>
                {layoutType === 'twoColumn' &&
                    <h2>{heading}</h2>
                }
                <div className={`mx-auto 
                ${layoutType === 'simpleFullWidth' && 'container'}
                ${layoutType === 'narrowContainer' && 'max-w-3xl'}
                ${layoutType === 'twoColumn' && 'md:columns-2'}
            `}>
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

                </div>
            </div>
        </div>
    )
}
