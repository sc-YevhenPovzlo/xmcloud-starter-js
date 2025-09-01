import React, { JSX } from 'react';
//import necessary types to render fields and define properties of the component
import { Field, ImageField, Image, RichText, LinkField, Link } from '@sitecore-content-sdk/nextjs';

//Define fields that our component will get during rendering. In this component we render tree fields: Content, Image, Link
type NewsPostProps = {
  fields: {
    Content: Field<string>;
    Image: ImageField & { metadata?: { [key: string]: unknown } };
    Link: LinkField;
  };
};

export const Default = ({ fields }: NewsPostProps): JSX.Element => {
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
                  <h3>NewsContent component is empty. </h3>
                  <h3>Please assign a data-dource item to it.</h3>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-12">
            {/* Define editalbe link field to render Link field. Display mock if datasource is missing. */}
            {fields ? <Link field={fields?.Link} /> : <a href="/">News and Events</a>}
          </div>
        </div>
      </section>
    </>
  );
};
