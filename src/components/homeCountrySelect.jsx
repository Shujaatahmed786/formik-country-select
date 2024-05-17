import {
    CitySelect,
    CountrySelect,
    StateSelect,
  } from "react-country-state-city";
  import "react-country-state-city/dist/react-country-state-city.css";
  import { useState } from "react";
  
  interface Proptype {
    onchange: Function;
    onblur: Function;
    errors: any;
    touched: boolean;
    setFieldValue: Function;
    value: any;
  }
  
  function App({
    onchange,
    onblur,
    errors,
    touched,
    setFieldValue,
    values,
  }) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <h6 className="text-[14px] text-gray-400 font-bold">Home Country</h6>
          <CountrySelect
            //   onChange={onchange}
            onChange={(e) => {
              setFieldValue("homeCountry", e.id);
            }}
            placeHolder="Select Country"
            onBlur={onblur}
            name="homeCountry"
          />
          {/* (e: any) => {
              setCountryid(e.id);
            } */}
          <div>
            <span className="text-red-500 font-bold">
              {errors.homeCountry && touched.homeCountry && (
                <small>{errors.homeCountry}</small>
              )}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <h6 className="text-[14px] text-gray-400 font-bold">State</h6>
          <StateSelect
            countryid={values.homeCountry}
            //   onChange={onchange}
  
            onChange={(e) => {
              setFieldValue("state", e.id);
            }}
            placeHolder="Select State"
            name="state"
            onBlur={onblur}
          />
          <div>
            <span className="text-red-500 font-bold">
              {errors.state && touched.state && <small>{errors.state}</small>}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <h6 className="text-[14px] text-gray-400 font-bold">City</h6>
          <CitySelect
            countryid={values.homeCountry}
            stateid={values.state}
            onChange={(e) => {
              console.log(e);
              setFieldValue("city", e.id);
            }}
            placeHolder="Select City"
            onBlur={onblur}
            name="city"
          />
          <div>
            <span className="text-red-500 font-bold">
              {errors.city && touched.city && <small>{errors.city}</small>}
            </span>
          </div>
        </div>
  
        <div className="flex flex-col gap-1 mt-4">
          <div className="flex flex-col">
            <span className="text-[14px] text-gray-400 font-bold">Gender</span>
            <div className="flex">
              <div className="flex flex-col justify-center mt-2 gap-2 ">
                <div className="flex gap-4">
                  <label className="flex gap-1 text-[14px] text-gray-400">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      onChange={onchange}
                      onBlur={onblur}
                      value="male"
                      className="w-4 h-4"
                    />
                  </label>
                  <label className="flex items-center gap-1 text-[14px] text-gray-400">
                    Female
                    <input
                      type="radio"
                      name="gender"
                      onChange={onchange}
                      onBlur={onblur}
                      value="female"
                      className="w-4 h-4"
                    />
                  </label>
                  <label className="flex items-center gap-1 text-[14px] text-gray-400">
                    Non-Binary
                    <input
                      type="radio"
                      name="gender"
                      onChange={onchange}
                      onBlur={onblur}
                      value="nonbinary"
                      className="w-4 h-4"
                    />
                  </label>
                </div>
                <div>
                  <span className="text-red-500 font-bold">
                    {errors.gender && touched.gender && (
                      <small>{errors.gender}</small>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  