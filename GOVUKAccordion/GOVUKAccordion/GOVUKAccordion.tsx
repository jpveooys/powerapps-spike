import * as objectHash from "object-hash";
import * as React from "react";
// @ts-ignore
import * as Accordion from "govuk-frontend/govuk/components/accordion/accordion";

export interface Entry {
  title: string;
  body: string;
}

export interface GOVUKAccordionProps {
  entries: Entry[];
}

export class GOVUKAccordion extends React.Component<GOVUKAccordionProps> {
  private accordion: any;

  constructor(props: GOVUKAccordionProps) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <div
        className="govuk-powerapps-accordion"
        key={objectHash(this.props.entries)}
      >
        <div className="js-enabled">
          <div
            ref={(element) => {
              if (
                element &&
                (!this.accordion || element !== this.accordion.$module)
              ) {
                this.accordion = new Accordion(element);
                this.accordion.init();
              }
            }}
            className="govuk-accordion"
            data-module="govuk-accordion"
            id="accordion-default"
          >
            {this.props.entries.map((entry, index) => (
              <div className="govuk-accordion__section" key={index}>
                <div className="govuk-accordion__section-header">
                  <h2 className="govuk-accordion__section-heading">
                    <span
                      className="govuk-accordion__section-button"
                      id={`accordion-default-heading-${index}`}
                    >
                      {entry.title}
                    </span>
                  </h2>
                </div>
                <div
                  id={`accordion-default-content-${index}`}
                  className="govuk-accordion__section-content"
                  aria-labelledby={`accordion-default-heading-${index}`}
                >
                  <p className="govuk-body">{entry.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
