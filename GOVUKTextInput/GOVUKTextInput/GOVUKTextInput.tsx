import * as React from "react";
import classNames from "classnames";

export interface GOVUKTextInputProps {
  isLarge?: boolean;
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export class GOVUKTextInput extends React.Component<GOVUKTextInputProps> {
  public render(): React.ReactNode {
    return (
      <div className="govuk-form-group">
        <label
          className={classNames("govuk-label", {
            "govuk-label--l": this.props.isLarge,
          })}
          htmlFor={this.props.name}
        >
          {this.props.label}
        </label>
        <input
          className="govuk-input"
          id={this.props.name}
          name={this.props.name}
          type="text"
          defaultValue={this.props.value}
          onChange={(event) => this.props.onChange(event.currentTarget.value)}
        />
      </div>
    );
  }
}
