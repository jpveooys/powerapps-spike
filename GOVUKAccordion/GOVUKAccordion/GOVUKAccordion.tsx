import * as React from "react";
// @ts-ignore
import * as Accordion from "govuk-frontend/govuk/components/accordion/accordion";
import classNames from "classnames";

export interface Entry {
  title: string;
  body: string;
}

export interface GOVUKAccordionProps {
  entries: Entry[];
}

export class GOVUKAccordion extends React.Component<GOVUKAccordionProps> {
  private readonly ref: React.RefObject<HTMLDivElement>;

  constructor(props: GOVUKAccordionProps) {
    super(props);
    this.ref = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    new Accordion(this.ref.current).init();
  }

  public render(): React.ReactNode {
    return (
      <div className="js-enabled">
        <div
          ref={this.ref}
          className="govuk-accordion"
          data-module="govuk-accordion"
          id="accordion-default"
        >
          {this.props.entries.map((entry, index) => (
            <div className="govuk-accordion__section" key={entry.title}>
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
                aria-labelledby="{`accordion-default-heading-${index}`}"
              >
                <p className="govuk-body">{entry.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
