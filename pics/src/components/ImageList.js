import React from 'react';
import ImageCard from './imagecart';
import './ImageList.css';
import imagecart from './imagecart';

const ImageList = ( props ) => {
    const images = props.images.map((image) => {
        return <ImageCard key = {image.id} image = {image} />
    })
    return <div className = "image-list">{ images }</div>;
};

export default ImageList;