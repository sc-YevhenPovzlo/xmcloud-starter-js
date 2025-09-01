import React, { JSX } from 'react';
//import necessary types to render fields and define properties of the component
import { Field, ImageField, Image, RichText, DateField } from '@sitecore-content-sdk/nextjs';
import { FieldMetadata } from '@sitecore-content-sdk/core/layout';

//Define fields that our component will get during rendering. In this component we render tree fields: Content, Image, Date
type EventProps = {
  fields: {
    Content: Field<string>;
    Image: ImageField & { metadata?: { [key: string]: unknown } };
    Date: FieldMetadata & {
      value?: string;
      editable?: string;
    };
  };
};

export const Default = ({ fields }: EventProps): JSX.Element => {
  return (
    <>
      <section className="sc-applicationContent component content">
        <div className="col-md-12 sc-applicationContent-main">
          <div>
            <div className="col-md-3">
              {/* Define editalbe image field to render Image field. Display mock if datasource is missing. */}
              {fields ? (
                <Image field={fields?.Image} />
              ) : (
                <img src="/img/sitecore-logo.jpg" alt="sitecore-logo"></img>
              )}
            </div>
            <div className="col-md-9">
              {/* Define editalbe rich text field to render Content field. Display mock if datasource is missing. */}
              {fields ? (
                <RichText field={fields?.Content} />
              ) : (
                <div>
                  <h3>EventContent component is empty. </h3>
                  <h3>Please assign a data-dource item to it.</h3>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-12">
            {/* Define editalbe date field to render Date field. Display mock if datasource is missing. */}
            {fields ? (
              <DateField
                tag="p"
                field={fields?.Date}
                render={(date) => date?.toDateString()}
              ></DateField>
            ) : (
              <p>{new Date().toDateString()}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
