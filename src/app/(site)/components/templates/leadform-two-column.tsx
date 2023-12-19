import FormBuilder from "./form-builder";
import HeaderSection from "./header-section";

interface Props {
    content: string;
    backgroundStyles: any;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    textAlign: string;
    formSchema: any;
    paddingTop: string;
    paddingBottom: string;
    formBackground: string;
    formTextColor: string;
}

export default function LeadFormTwoColumn({
    content,
    backgroundStyles,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    textAlign,
    formSchema,
    paddingTop,
    paddingBottom,
    formBackground,
    formTextColor
}: Props) {

    const styles = {
        paddingTop: paddingTop ?? '5rem',
        paddingBottom: paddingBottom ?? '5rem',
    }

    const allStyles = { ...backgroundStyles, ...styles }

    return (
        <div style={allStyles}>
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-32 gap-10 items-center">
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
                    <div>
                        <div className="py-10 md:px-12 px-4" style={{
                            backgroundColor: formBackground ? formBackground : 'transparent',
                            color: formTextColor ? formTextColor : '#000'
                        }}>
                            <FormBuilder
                                formSchema={formSchema}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
