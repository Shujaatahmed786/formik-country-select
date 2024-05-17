import React from "react";
import matchMeVal from "./homeCountryVal";
import { useFormik } from "formik";
import homeCountrySelect from "../components/homeCountrySelect";

const initialValues = {
  homeCountry: "",
  city: "",
  gender: "",
  gpa: "",
  honourClasses: "",
  satScore: "",
  extracuricullar: "",
  classRank: "",
  apClass: "",
  actScore: "",
  leaderShipRole: "",
  classSize: "",
  collegeClasses: "",
  apExam: "",
  targetMajors: "",
  campusEnvironment: "",
  additionalCriteria: "",
  location: "",
  targetClass: "",
  state: "",
};

const CollegePreferencesForm = () => {
  const {
    values,
    handleSubmit,
    handleBlur,
    setFieldValue,
    setFieldError,
    handleChange,
    errors,
    touched,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (val) => {
      console.log(val);
    },
    validationSchema: matchMeVal,
  });
  console.log(errors);

  console.log("Values", values);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-14 p-4 mt-[2rem] rounded-lg w-full max-w-[70rem] m-auto"
    >
      <div className="flex justify-end mb-4">
        <button
          type="submit"
          className="px-8 p-2 bg-[#0067ff] text-[12px] text-white rounded-lg"
        >
          Match Me
        </button>
      </div>

      <div className="p-4 bg-white shadow3 rounded-[10px] outline-none w-full">
        <div className="">
       
          <div className="flex flex-col">
            <div>
              <homeCountrySelect
                onchange={handleChange}
                onblur={handleBlur}
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
              />
            </div>

          
          </div>
        </div>
      </div>

      {/* High School Achievement Section */}
      <div className="p-4 bg-white  shadow3 rounded-[10px] outline-none w-full gap-10">
        <h6 className="text-[#0067ff] text-center text-[1.5rem] mt-5">
          High School Achievements
        </h6>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="gpa"
                className="flex gap-2 text-[14px] text-gray-400 font-bold"
              >
                GPA <span className="text-red-700">*</span>
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="gpa"
                type="number"
                placeholder="Enter the gpa"
                value={values.gpa}
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-lg outline-none appearance-none"
                inputMode="numeric"
                style={{
                  appearance:
                    "none" /* This hides the increment/decrement arrows */,
                }}
              />
              <span className="text-red-500 font-bold">
                {errors.gpa && touched.gpa && <small>{errors.gpa}</small>}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="honorClasses"
                className="flex flex-col gap-2 text-[14px] text-gray-400 font-bold"
              >
                Honor Classes
              </label>
              <input
                name="honourClasses"
                type="text"
                placeholder="Enter the honor classes"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.honourClasses}
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none "
              />
              <span className="text-red-500 font-bold">
                {errors.honourClasses && touched.honourClasses && (
                  <small>{errors.honourClasses}</small>
                )}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="satScore"
                className="flex flex-col text-[14px] text-gray-400 font-bold"
              >
                SAT Score
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="satScore"
                type="number"
                placeholder="Enter the sat score"
                value={values.satScore}
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-lg outline-none appearance-none"
                inputMode="numeric"
                style={{
                  appearance:
                    "none" /* This hides the increment/decrement arrows */,
                }}
              />
              <span className="text-red-500 font-bold">
                {errors.satScore && touched.satScore && (
                  <small>{errors.satScore}</small>
                )}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="extracurricular"
                className="flex gap-2 text-[14px] text-gray-400 font-bold"
              >
                Extracurricular <span className="text-red-700">*</span>
              </label>
              <input
                id="extracuricullar"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.extracuricullar}
                placeholder="Enter extracurricular activities"
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none "
              />
              <span className="text-red-500 font-bold">
                {errors.extracuricullar && touched.extracuricullar && (
                  <small>{errors.extracuricullar}</small>
                )}
              </span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="classRank"
                className="flex flex-col text-[14px] text-gray-400 font-bold"
              >
                Class Rank
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="classRank"
                type="number"
                placeholder="Enter the class rank"
                value={values.classRank}
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-lg outline-none appearance-none"
                inputMode="numeric"
                style={{
                  appearance:
                    "none" /* This hides the increment/decrement arrows */,
                }}
              />
              <span className="text-red-500 font-bold">
                {touched.classRank && touched.classRank && (
                  <small>{errors.classRank}</small>
                )}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="apClasses"
                className="flex flex-col gap-2 text-[14px] text-gray-400 font-bold"
              >
                AP Classes
              </label>
              <input
                id="apClass"
                type="text"
                placeholder="Enter AP classes"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.apClass}
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none "
              />
              <span className="text-red-500 font-bold">
                {errors.apClass && touched.apClass && (
                  <small>{errors.apClass}</small>
                )}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="actScore"
                className="flex flex-col gap-2 text-[14px] text-gray-400 font-bold"
              >
                ACT Score
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="actScore"
                type="number"
                placeholder="Enter the act score"
                value={values.actScore}
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-lg outline-none appearance-none"
                inputMode="numeric"
                style={{
                  appearance:
                    "none" /* This hides the increment/decrement arrows */,
                }}
              />
              <span className="text-red-500 font-bold">
                {errors.actScore && touched.actScore && (
                  <small>{errors.actScore}</small>
                )}
              </span>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col">
                <label
                  htmlFor="leaderShipRole"
                  className="flex flex-col gap-2 text-[14px] text-gray-400 font-bold"
                >
                  Leadership Roles
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center p-[10px] gap-2 text-[14px] text-gray-400 ">
                    Yes
                    <input
                      type="radio"
                      name="leaderShipRole"
                      value="Yes"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-4 h-4 text-[14px] text-gray-400"
                    />
                  </label>
                  <label className="flex items-center gap-2 text-[14px] text-gray-400">
                    No
                    <input
                      type="radio"
                      name="leaderShipRole"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value="No"
                      className="w-4 h-4 "
                    />
                  </label>
                </div>
                <span className="text-red-500 font-bold">
                  {errors.leaderShipRole && touched.leaderShipRole && (
                    <small>{errors.leaderShipRole}</small>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="classSize"
                className="flex flex-col text-[14px] text-gray-400 font-bold"
              >
                Class Size
              </label>
              <input
                id="classSize"
                type="text"
                placeholder="Enter class size"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.classSize}
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none"
              />
              <span className="text-red-500 font-bold">
                {errors.classSize && touched.classSize && (
                  <small>{errors.classSize}</small>
                )}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="collegeClasses"
                className="flex flex-col gap-2 text-[14px] text-gray-400 font-bold"
              >
                College Classes
              </label>
              <input
                id="collegeClasses"
                type="text"
                placeholder="Enter college classes"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.collegeClasses}
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none"
              />
              <span className="text-red-500 font-bold">
                {errors.collegeClasses && touched.collegeClasses && (
                  <small>{errors.collegeClasses}</small>
                )}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="apExam"
                className="flex flex-col gap-2 text-[14px] text-gray-400 font-bold"
              >
                AP Exam
              </label>
              <input
                id="apExam"
                type="text"
                placeholder="Enter AP exam details"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.apExam}
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none"
              />
              <span className="text-red-500 font-bold">
                {errors.apExam && touched.apExam && (
                  <small>{errors.apExam}</small>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* College Preferences Section */}
      <div className="flex flex-col shadow-lg gap-4 p-4 shadow3 bg-white rounded-[10px] outline-none w-full">
        <h4 className="text-[#0067ff] text-center text-[1.5rem] mt-5">
          College Preferences
        </h4>
        <div>
          <div className="grid gap-4 gap-y-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col">
                <label
                  htmlFor="targetMajors"
                  className="text-[14px] text-gray-400 font-bold"
                >
                  Target Major(s) <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter target major"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.targetMajors}
                  name="targetMajors"
                  className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none"
                />
                <span className="text-red-500 font-bold">
                  {errors.targetMajors && touched.targetMajors && (
                    <small>{errors.targetMajors}</small>
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex flex-col">
                <label
                  htmlFor="location"
                  className="text-[14px] text-gray-400 font-bold"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter preferred location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                  className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none "
                />
                <span className="text-red-500 font-bold">
                  {errors.location && touched.location && (
                    <small>{errors.location}</small>
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex flex-col">
                <label
                  htmlFor="targetClass"
                  className="text-[14px] text-gray-400 font-bold"
                >
                  Target Class
                </label>
                <input
                  id="targetClass"
                  type="text"
                  placeholder="Enter target class"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.targetClass}
                  className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none"
                />
                <span className="text-red-500 font-bold">
                  {errors.targetClass && touched.targetClass && (
                    <small>{errors.targetClass}</small>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col">
              <label
                htmlFor="campusEnvironment"
                className="text-[14px] text-gray-400 font-bold"
              >
                Campus Environment
              </label>
              <input
                type="text"
                placeholder="Enter campus environment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.campusEnvironment}
                name="campusEnvironment"
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none"
              />
              <span className="text-red-500 font-bold">
                {errors.campusEnvironment && touched.campusEnvironment && (
                  <small>{errors.campusEnvironment}</small>
                )}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex flex-col">
              <label
                htmlFor="additionalCriteria"
                className="text-[14px] text-gray-400 font-bold"
              >
                Additional Criteria
              </label>
              <input
                type="text"
                className="p-3 text-[12px] border-[1px] border-[#c5c4c4] rounded-[10px] outline-none"
                placeholder="Enter Additional Criteria"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.additionalCriteria}
                name="additionalCriteria"
              />
              <span className="text-red-500 font-bold">
                {errors.additionalCriteria && touched.additionalCriteria && (
                  <small>{errors.additionalCriteria}</small>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CollegePreferencesForm;
