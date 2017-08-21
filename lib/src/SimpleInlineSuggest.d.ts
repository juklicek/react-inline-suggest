/// <reference types="react" />
import * as React from 'react';
import { ReactElement } from 'react';
import { SuggestType } from './Types';
export declare namespace SimpleInlineSuggest {
    type Props = SuggestType.Props;
    type State = SuggestType.State;
}
export declare class SimpleInlineSuggest extends React.Component<SimpleInlineSuggest.Props, SimpleInlineSuggest.State> {
    static defaultProps: {
        ignoreCase: boolean;
    };
    constructor(props: SimpleInlineSuggest.Props);
    render(): ReactElement<any>;
    private fireOnChange;
    private handleOnChange;
    private handleOnBlur;
    private handleOnKeyDown;
    private handleOnKeyUp;
}