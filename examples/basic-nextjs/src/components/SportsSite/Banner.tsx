import { ImageField, Image } from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

type BannerProps = {
  fields: {
    Image: ImageField & { metadata?: { [key: string]: unknown } };
  };
};

export const Default = ({ fields }: BannerProps): JSX.Element => {
  return (
    <div>
      <div className="bannerWrapper1 bannerWrapper2">
        <Image className="banner_image" field={fields.Image}></Image>
      </div>
    </div>
  );
};
