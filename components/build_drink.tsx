'use client'

import { useState } from "react";
import BaseDrink from "./base_drink";
import MilkChoice from "./milk_choice";
import HotOrCold from "./hot_or_cold";
import AddOns from "./add_ons";
import ConfirmOrder from "./confirm_order";
import AllDone from "./all_done";

export default function BuildDrink({ name }: { name: string }) {

    const [currentStep, setCurrentStep] = useState<string>('baseDrink');
    const [formData, setFormData] = useState<{
        selectedDrink: null | string,
        temperature: null | string,
        milkChoice: null | string,
        customizations: string[],
        hotAndCold: null | boolean,
        milkDrink: null | boolean,
        hasAddOns: null | boolean,
    }>(
        {
            selectedDrink: null,
            temperature: null,
            milkChoice: null,
            customizations: [],
            hotAndCold: null,
            milkDrink: null,
            hasAddOns: null,
        }
    )

    function handleNextStep(step: string) {
        setCurrentStep(step);
    }

    function handlePreviousStep(step: string) {
        setCurrentStep(step);
    }

    function handleBaseDrinkChange(selectedDrink: string | null) {
        setFormData({
            selectedDrink,
            temperature: null,
            milkChoice: null,
            customizations: [],
            hotAndCold: true,
            milkDrink: true,
            hasAddOns: null,
        });
    };

    function updateFormData(field: string, value: boolean | string) {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    function toggleCustomization(addOn: string) {

        setFormData(prev => {
            if (prev.customizations.includes(addOn)) {
                return {
                    ...prev,
                    customizations: prev.customizations.filter(c => c !== addOn)
                }
            }

            return {
                ...prev,
                customizations: [...prev.customizations, addOn]
            }
        });
    }

    return (
        <div className="flex flex-col gap-y-4 max-w-10/12">
            {
                // Step 1. Base drink
                currentStep === 'baseDrink' && <BaseDrink name={name} nextStep={handleNextStep} value={formData.selectedDrink} updateValue={updateFormData} baseDrinkChange={handleBaseDrinkChange} choseMilkDrink={formData.milkDrink} />
            }
            {
                // Step 2. Milk choice - optional
                currentStep === 'milkChoice' && <MilkChoice nextStep={handleNextStep} previousStep={handlePreviousStep} value={formData.milkChoice} updateValue={updateFormData} hotAndCold={formData.hotAndCold} />
            }
            {
                //Step 3. Temperature - optional
                currentStep === 'temperature' && formData.hotAndCold && <HotOrCold nextStep={handleNextStep} previousStep={handlePreviousStep} hotAndCold={formData.hotAndCold} updateValue={updateFormData} value={formData.temperature} hasAddOns={formData.hasAddOns} />
            }
            {
                currentStep === 'addOns' && formData.hasAddOns && (<AddOns previousStep={handlePreviousStep} nextStep={handleNextStep} toggleCustomization={toggleCustomization} values={formData.customizations} hotAndCold={formData.hotAndCold} />)
            }
            {
                currentStep === 'confirm' && formData.selectedDrink && <ConfirmOrder temperature={formData.temperature} milkChoice={formData.milkChoice} selectedDrink={formData.selectedDrink} customizations={formData.customizations} previousStep={handlePreviousStep} name={name} />
            }
            {
                currentStep === 'allDone' && <AllDone />
            }
        </div>
    )
}

