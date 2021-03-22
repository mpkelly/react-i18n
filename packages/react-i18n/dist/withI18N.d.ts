import React from 'react';
export declare type I18NProperty = {
    [key: string]: string | any[] | undefined;
    args?: any[];
};
export declare type I18NComponentProps = {
    i18n?: string | I18NProperty | I18NProperty[];
};
export declare function withI18N<P extends I18NComponentProps>(Component: React.FC<P>): React.FC<P>;
