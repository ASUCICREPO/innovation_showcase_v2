/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ChallengesInfo } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ChallengesInfoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ProjectName: "",
    Category: "",
    Customer: "",
    AWSServices: "",
    ProjectPic: "",
    ProjectInfoURL: "",
    Demolink: "",
    Highlight: false,
  };
  const [ProjectName, setProjectName] = React.useState(
    initialValues.ProjectName
  );
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [Customer, setCustomer] = React.useState(initialValues.Customer);
  const [AWSServices, setAWSServices] = React.useState(
    initialValues.AWSServices
  );
  const [ProjectPic, setProjectPic] = React.useState(initialValues.ProjectPic);
  const [ProjectInfoURL, setProjectInfoURL] = React.useState(
    initialValues.ProjectInfoURL
  );
  const [Demolink, setDemolink] = React.useState(initialValues.Demolink);
  const [Highlight, setHighlight] = React.useState(initialValues.Highlight);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProjectName(initialValues.ProjectName);
    setCategory(initialValues.Category);
    setCustomer(initialValues.Customer);
    setAWSServices(initialValues.AWSServices);
    setProjectPic(initialValues.ProjectPic);
    setProjectInfoURL(initialValues.ProjectInfoURL);
    setDemolink(initialValues.Demolink);
    setHighlight(initialValues.Highlight);
    setErrors({});
  };
  const validations = {
    ProjectName: [],
    Category: [],
    Customer: [],
    AWSServices: [],
    ProjectPic: [],
    ProjectInfoURL: [],
    Demolink: [],
    Highlight: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ProjectName,
          Category,
          Customer,
          AWSServices,
          ProjectPic,
          ProjectInfoURL,
          Demolink,
          Highlight,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new ChallengesInfo(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ChallengesInfoCreateForm")}
      {...rest}
    >
      <TextField
        label="Project name"
        isRequired={false}
        isReadOnly={false}
        value={ProjectName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName: value,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Demolink,
              Highlight,
            };
            const result = onChange(modelFields);
            value = result?.ProjectName ?? value;
          }
          if (errors.ProjectName?.hasError) {
            runValidationTasks("ProjectName", value);
          }
          setProjectName(value);
        }}
        onBlur={() => runValidationTasks("ProjectName", ProjectName)}
        errorMessage={errors.ProjectName?.errorMessage}
        hasError={errors.ProjectName?.hasError}
        {...getOverrideProps(overrides, "ProjectName")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={Category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category: value,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Demolink,
              Highlight,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      ></TextField>
      <TextField
        label="Customer"
        isRequired={false}
        isReadOnly={false}
        value={Customer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer: value,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Demolink,
              Highlight,
            };
            const result = onChange(modelFields);
            value = result?.Customer ?? value;
          }
          if (errors.Customer?.hasError) {
            runValidationTasks("Customer", value);
          }
          setCustomer(value);
        }}
        onBlur={() => runValidationTasks("Customer", Customer)}
        errorMessage={errors.Customer?.errorMessage}
        hasError={errors.Customer?.hasError}
        {...getOverrideProps(overrides, "Customer")}
      ></TextField>
      <TextField
        label="Aws services"
        isRequired={false}
        isReadOnly={false}
        value={AWSServices}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices: value,
              ProjectPic,
              ProjectInfoURL,
              Demolink,
              Highlight,
            };
            const result = onChange(modelFields);
            value = result?.AWSServices ?? value;
          }
          if (errors.AWSServices?.hasError) {
            runValidationTasks("AWSServices", value);
          }
          setAWSServices(value);
        }}
        onBlur={() => runValidationTasks("AWSServices", AWSServices)}
        errorMessage={errors.AWSServices?.errorMessage}
        hasError={errors.AWSServices?.hasError}
        {...getOverrideProps(overrides, "AWSServices")}
      ></TextField>
      <TextField
        label="Project pic"
        isRequired={false}
        isReadOnly={false}
        value={ProjectPic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic: value,
              ProjectInfoURL,
              Demolink,
              Highlight,
            };
            const result = onChange(modelFields);
            value = result?.ProjectPic ?? value;
          }
          if (errors.ProjectPic?.hasError) {
            runValidationTasks("ProjectPic", value);
          }
          setProjectPic(value);
        }}
        onBlur={() => runValidationTasks("ProjectPic", ProjectPic)}
        errorMessage={errors.ProjectPic?.errorMessage}
        hasError={errors.ProjectPic?.hasError}
        {...getOverrideProps(overrides, "ProjectPic")}
      ></TextField>
      <TextField
        label="Project info url"
        isRequired={false}
        isReadOnly={false}
        value={ProjectInfoURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL: value,
              Demolink,
              Highlight,
            };
            const result = onChange(modelFields);
            value = result?.ProjectInfoURL ?? value;
          }
          if (errors.ProjectInfoURL?.hasError) {
            runValidationTasks("ProjectInfoURL", value);
          }
          setProjectInfoURL(value);
        }}
        onBlur={() => runValidationTasks("ProjectInfoURL", ProjectInfoURL)}
        errorMessage={errors.ProjectInfoURL?.errorMessage}
        hasError={errors.ProjectInfoURL?.hasError}
        {...getOverrideProps(overrides, "ProjectInfoURL")}
      ></TextField>
      <TextField
        label="Demolink"
        isRequired={false}
        isReadOnly={false}
        value={Demolink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Demolink: value,
              Highlight,
            };
            const result = onChange(modelFields);
            value = result?.Demolink ?? value;
          }
          if (errors.Demolink?.hasError) {
            runValidationTasks("Demolink", value);
          }
          setDemolink(value);
        }}
        onBlur={() => runValidationTasks("Demolink", Demolink)}
        errorMessage={errors.Demolink?.errorMessage}
        hasError={errors.Demolink?.hasError}
        {...getOverrideProps(overrides, "Demolink")}
      ></TextField>
      <SwitchField
        label="Highlight"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Highlight}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Demolink,
              Highlight: value,
            };
            const result = onChange(modelFields);
            value = result?.Highlight ?? value;
          }
          if (errors.Highlight?.hasError) {
            runValidationTasks("Highlight", value);
          }
          setHighlight(value);
        }}
        onBlur={() => runValidationTasks("Highlight", Highlight)}
        errorMessage={errors.Highlight?.errorMessage}
        hasError={errors.Highlight?.hasError}
        {...getOverrideProps(overrides, "Highlight")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
