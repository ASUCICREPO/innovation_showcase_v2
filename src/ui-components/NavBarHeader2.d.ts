/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeader2OverridesProps = {
    NavBarHeader2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<ViewProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    WebsiteName?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBarHeader2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeader2OverridesProps | undefined | null;
}>;
export default function NavBarHeader2(props: NavBarHeader2Props): React.ReactElement;
