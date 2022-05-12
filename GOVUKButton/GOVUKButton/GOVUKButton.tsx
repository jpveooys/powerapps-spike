import * as React from "react";
import classNames from "classnames";

export interface GOVUKButtonProps {
  children: string;
  onClick: () => void;
  type?: "primary" | "secondary" | "warning";
}

export class GOVUKButton extends React.Component<GOVUKButtonProps> {
  public render(): React.ReactNode {
    return (
      <button
        className={classNames({
          "govuk-button": true,
          "govuk-button--secondary": this.props.type === "secondary",
          "govuk-button--warning": this.props.type === "warning",
        })}
        data-module="govuk-button"
        onClick={() => {
          this.props.onClick();
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
