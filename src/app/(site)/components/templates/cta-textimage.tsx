import Image from "next/image";
import ContentEditor from "../util/content-editor";
import { ctaData } from "../../../../../sample/data";
import Styles from "./cta-textimage.module.css";
import HeaderSection from "./header-section";

interface Props {
    image: string;
    altText: string;
    blurData: string;
    content: string;
    reverseColumn: boolean;
    backgroundStyles: any;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    textAlign: string;
    paddingTop: string;
    paddingBottom: string;
    imageWidth: number;
    columnLayout: string; // Added property for column layout
}

export default function CalltoActionTextImage({
    image,
    altText,
    blurData,
    content,
    reverseColumn,
    backgroundStyles,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonText,
    secondaryButtonLink,
    secondaryButtonStyle,
    paddingTop,
    paddingBottom,
    textAlign,
    imageWidth,
    columnLayout, // Added property for column layout
}: Props) {
    const getColumnLayoutClasses = () => {
        switch (columnLayout) {
            case "half":
                return "lg:w-1/2";
            case "twoFifths":
                return "lg:w-2/5";
            case "oneThird":
                return "lg:w-1/3";
            default:
                return "lg:w-1/2";
        }
    };

    const getSecondColumnLayoutClasses = () => {
        switch (columnLayout) {
            case "half":
                return "lg:w-1/2";
            case "twoFifths":
                return "lg:w-3/5";
            case "oneThird":
                return "lg:w-2/3";
            default:
                return "lg:w-1/2";
        }
    };

    const styles = {
        paddingTop: paddingTop ?? "5rem",
        paddingBottom: paddingBottom ?? "5rem",
    };

    const allStyles = { ...backgroundStyles, ...styles };

    return (
        <div style={allStyles}>
            <div className="container">
                <div className={`${Styles.ctaTextImageWrapper} space-y-10 ${reverseColumn ? "flex-row-reverse" : ""}`}>
                    {image && (
                        <div className={`${getColumnLayoutClasses()}`}>
                            <Image
                                src={image}
                                alt={altText}
                                placeholder={blurData ? "blur" : "empty"}
                                blurDataURL={blurData}
                                width={imageWidth ? imageWidth : 1824}
                                height={1080}
                            />
                        </div>
                    )}
                    <div className={`${getSecondColumnLayoutClasses()}`}>
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
        </div>
    );
}
