import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

type IProps = {
  showLoginModal: boolean;
  setShowLoginModal: (value: boolean) => void;
};

const LoginModal: React.FC<IProps> = (props) => {
  const { showLoginModal, setShowLoginModal } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      {showLoginModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Sign in</h3>
                </div>
                {/*body*/}
                <form className="mx-6 mb-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">
                      Email
                    </label>
                    <input
                      {...register("mail", {
                        required: "Email Address is required",
                      })}
                      aria-invalid={errors.mail ? "true" : "false"}
                      className="border py-2 px-3 text-grey-darkest"
                      type="text"
                      name="first_name"
                      id="first_name"
                    />
                    {errors.mail && <p role="alert">{errors.mail.message}</p>}
                  </div>
                  <div className="flex flex-col mb-6">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">
                      Password
                    </label>
                    <input
                      {...register("password", {
                        required: true,
                        maxLength: 20,
                      })}
                      className="border py-2 px-3 text-grey-darkest"
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                  <button
                    className="block bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded"
                    type="submit"
                  >
                    Create Account
                  </button>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowLoginModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default LoginModal;
