import React from "react";
import ContactForm from "../Contact/ContactForm";
import "./CoronaInfo.css";

const CoronaInfo = () => {
  return (
    <div className="corona">
      <div className=" mt-10 container mx-auto">
        <h2 className="text-center text-4xl text-green-700">
          Coronavirus disease (COVID-19)
        </h2>

        <div className="flex flex-col items-center justify-center">
          <div className="mt-10">
            <div className="flex items-center justify-start">
              <span className="h-0.5 bg-green-400 w-10"></span>
              <h4 className="text-green-600 text-lg ml-2">Overview</h4>
              <span className="h-0.5 bg-green-400 w-10"></span>
            </div>

            <div className="space-y-2 text-gray-700">
              <em className="text-lg">
                Coronavirus disease (COVID-19) is an infectious disease caused
                by the SARS-CoV-2 virus.
              </em>
              <p>
                Most people infected with the virus will experience mild to
                moderate respiratory illness and recover without requiring
                special treatment. However, some will become seriously ill and
                require medical attention. Older people and those with
                underlying medical conditions like cardiovascular disease,
                diabetes, chronic respiratory disease, or cancer are more likely
                to develop serious illness. Anyone can get sick with COVID-19
                and become seriously ill or die at any age.
              </p>
              <p>
                The best way to prevent and slow down transmission is to be well
                informed about the disease and how the virus spreads. Protect
                yourself and others from infection by staying at least 1 metre
                apart from others, wearing a properly fitted mask, and washing
                your hands or using an alcohol-based rub frequently. Get
                vaccinated when it’s your turn and follow local guidance.
              </p>
              <p>
                The virus can spread from an infected person’s mouth or nose in
                small liquid particles when they cough, sneeze, speak, sing or
                breathe. These particles range from larger respiratory droplets
                to smaller aerosols. It is important to practice respiratory
                etiquette, for example by coughing into a flexed elbow, and to
                stay home and self-isolate until you recover if you feel unwell.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-start">
              <span className="h-0.5 bg-green-400 w-10"></span>
              <h4 className="text-green-600 text-lg ml-2">Prevention</h4>
              <span className="h-0.5 bg-green-400 w-10"></span>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="text-gray-700 text-xl mb-5">
                To prevent infection and to slow transmission of COVID-19, do
                the following:{" "}
              </p>
              <p className="text-gray-700">
                To prevent infection and to slow transmission of COVID-19, do
                the following:{" "}
              </p>
              <li> Get vaccinated when a vaccine is available to you.</li>
              <li>
                Stay at least 1 metre apart from others, even if they don’t
                appear to be sick.
              </li>
              <li>
                Wear a properly fitted mask when physical distancing is not
                possible or when in poorly ventilated settings.
              </li>
              <li>
                Choose open, well-ventilated spaces over closed ones. Open a
                window if indoors.
              </li>
              <li>
                Wash your hands regularly with soap and water or clean them with
                alcohol-based hand rub.
              </li>
              <li>Cover your mouth and nose when coughing or sneezing.</li>
              <li>
                If you feel unwell, stay home and self-isolate until you
                recover.
              </li>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h3 className="text-4xl text-green-700 border-b-2 border-green-600 inline-block">
            Any Urgent needed
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default CoronaInfo;
