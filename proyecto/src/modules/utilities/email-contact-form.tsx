import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useForm as useFormspree} from '@formspree/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import completedAction from '../../assets/lotties/completedAction.json';
import Lottie from "lottie-react";
import {ContactFormProps, FormData} from "../types/EmailContact.tsx";



const ContactForm: React.FC<ContactFormProps> = ({t}) => {
    const {control, handleSubmit, formState: {errors}} = useForm<FormData>();
    const [state, submit] = useFormspree("mqazekpv");

    const onSubmit = async (data: FormData) => {
        submit(data);
    };

    return (
        <div className="w-[400px] text-neutral-700">
            {
                state.succeeded ?
                   <>
                       <Lottie loop={false} animationData={completedAction}/>
                       <p className="text-xs text-center italic">{t('closeOverlay')}</p>
                   </>  :

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <h2 className="text-6xl font-bold mb-4 text-center">{t("emailInvitation")}</h2>
                        {state.errors &&
                            <div className="bg-neutral-100 rounded-lg p-4 mb-2 font-bold shadow-inner">
                                {state.errors?.getFormErrors().length &&
                                    <p className="text-red-600">{t('emailFailure')}</p>}
                            </div>
                        }
                        <div className="mb-5">
                            <Controller
                                name="title"
                                control={control}
                                defaultValue=""
                                rules={{required: true}}
                                render={({field}) => (
                                    <div className="relative z-0 w-full group">
                                        <label className=" block mb-2 text-sm font-bold ">
                                            {t('titleLabel')}
                                        </label>
                                        <input
                                            type="text"
                                            {...field}
                                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-mena-ocean focus:border-mena-ocean block w-full p-2.5"
                                            placeholder={t('titlePlaceholder')}
                                        />

                                        {errors.title && <span className="text-red-600">{t('requiredFieldWarn')}</span>}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="mb-5">
                            <Controller
                                name="from"
                                control={control}
                                defaultValue=""
                                rules={{required: true}}
                                render={({field}) => (
                                    <div className="relative z-0 w-full group">
                                        <label className="block mb-2 text-sm font-bold">
                                            {t('emailContactLabel')}
                                        </label>
                                        <div className="flex flex-row justify-center items-center ">
                                            <div
                                                className="px-3 text-lg flex flex-row items-center bg-neutral-200 h-[42px] rounded-l-lg">
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                            </div>

                                            <input
                                                type="email"
                                                {...field}
                                                className="bg-gray-50 border border-gray-300  text-sm rounded-r-lg focus:ring-mena-ocean focus:border-mena-ocean block w-full p-2.5"
                                                placeholder={t('emailContactPlaceholder')}
                                            />
                                        </div>
                                        {errors.from && <span className="text-red-600">{t('requiredFieldWarn')}</span>}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="mb-5">
                            <Controller
                                name="message"
                                control={control}
                                defaultValue=""
                                rules={{required: true}}
                                render={({field}) => (
                                    <div className="relative z-0 w-full group">
                                        <label className="block mb-2 text-sm font-bold ">
                                            {t('messageLabel')}
                                        </label>
                                        <textarea
                                            {...field}
                                            className="resize-none bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-mena-ocean focus:border-mena-ocean block w-full p-2.5 h-[150px]"
                                            placeholder={t('messagePlaceholder')}
                                        ></textarea>

                                        {errors.message && <span className="text-red-600">{t('requiredFieldWarn')}</span>}
                                    </div>
                                )}
                            />
                        </div>

                        <button type="submit"
                                className="text-white bg-mena-ocean hover:bg-mena-ocean focus:ring-4 focus:outline-none focus:ring-mena-ocean font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                disabled={state.submitting}>
                            {t('sendLabel')} <FontAwesomeIcon className="pl-1" icon={faPaperPlane}/>
                        </button>

                    </form>}
        </div>
    );
};

export default ContactForm;
