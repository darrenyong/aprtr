import * as React from 'react';
import { Props, State, DefaultProps, ProcessedImage } from './interfaces';
import { curateImageList } from './utils';
declare class JustifiedGrid extends React.Component<Props, State> {
    private wrapperEl;
    private debounceResizeHandler;
    static readonly displayName = "JustifiedGrid";
    static defaultProps: DefaultProps;
    constructor(props: Props);
    handleWindowResize: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    process(): ProcessedImage[];
    sync(): void;
    render(): JSX.Element;
}
export { curateImageList };
export default JustifiedGrid;
