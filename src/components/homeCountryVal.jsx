import { string, array, number, object, boolean } from "yup";

const matchMeVal = object({
  homeCountry:string().required("please enter the home country"),
  city: string().required("please enter the city"),
  gender:string().required("please select the gender"),
  gpa: number().min(1).required("please enter the gpa"),
  honourClasses: string().min(3).required("please enter the honour classes"),
  satScore: string().min(5).required("please enter the sat score"),
  extracuricullar: string().min(5).required("please enter the extracuricular"),
  classRank: string().min(5).required("please enter the class rank"),
  apClass: string().min(5).required("please enter the ap class"),
  actScore: string().min(3).required("please enter the act score"),
  leaderShipRole: string().required("please select Yes or No"),
  classSize: string().min(3).required("please enter the class size"),
  collegeClasses: string().min(5).required("please enter the college class"),
  apExam: string().min(5).required("please enter the ap exam"),
  targetMajors: string().min(5).required("please enter the target major"),
  campusEnvironment: string()
    .min(5)
    .required("please enter the campus environment"),
  additionalCriteria: string()
    .min(5)
    .required("please enter the additional criteria"),
  location: string().min(5).required("please enter the location"),
  targetClass: string().min(5).required("please enter the target class"),
});

export default matchMeVal;
