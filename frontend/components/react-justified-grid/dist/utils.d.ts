import { DefaultProps, Image, ProcessedImage } from './interfaces';
export declare function getRowHeight(images: Image[], width: number, gutter: number): number;
/**
 * Curate image list according to setting
 */
export declare const curateImageList: (images: Image[], width: number, setting: DefaultProps) => ProcessedImage[];
export declare function updateProcessedImageList(processImageList: ProcessedImage[], selectedImages: Image[], rowHeight: number, currentHeight: number, rowIndex: number, gutterWidth: number): ProcessedImage[];
