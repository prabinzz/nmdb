import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const login = () => {
	const googleSignin = () => {
		signIn("google", { callbackUrl: "/home" });
	};
	return (
		<section className="h-screen mx-auto bg-c-primary mt-0 flex items-center justify-center">
			<div className=" max-w-4xl bg-gray-900 rounded-3xl min-h-[40vh] p-10">
				<div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
					<div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
						<img
							src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
							className="w-full"
							alt="Sample image"
						/>
					</div>
					<div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
						<form>
							{/* <!-- Email input --> */}
							<div className="relative mb-6">
								<label
									htmlFor="exampleFormControlInput2"
									className="pointer-events-none max-w-[90%] truncate pt-[0.37rem] leading-[2.15] text-neutral-500  dark:text-neutral-200"
								>
									Email address
								</label>
								<input
									type="text"
									className="block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[2.15] outline-none"
									id="exampleFormControlInput2"
									placeholder="Email address"
								/>
							</div>

							{/* <!-- Password input --> */}
							<div className="relative mb-6">
								<label
									htmlFor="exampleFormControlInput22"
									className="pointer-events-none max-w-[90%] truncate pt-[0.37rem] leading-[2.15] text-neutral-500  dark:text-neutral-200"
								>
									Password
								</label>
								<input
									type="password"
									className="block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[2.15] outline-none"
									id="exampleFormControlInput22"
									placeholder=""
								/>
							</div>

							<div className="text-center flex gap-4 justify-center lg:text-left">
								<button
									type="button"
									className="inline-block rounded bg-c-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-c-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-c-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-c-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
									data-te-ripple-init
									data-te-ripple-color="light"
								>
									Login
								</button>
								<button
									type="button"
									className="inline-block rounded bg-c-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-c-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-c-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-c-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
									data-te-ripple-init
									data-te-ripple-color="light"
								>
									Signup
								</button>
							</div>

							<div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
								<p className="mx-4 mb-0 text-center font-semibold dark:text-white">
									Or
								</p>
							</div>
							<div
								className="flex flex-row gap-4 px-4 py-2 text-c-semi-dark border-c-primary border-r-2 bg-white items-center justify-center cursor-pointer"
								onClick={googleSignin}
							>
								<button
									type="button"
									data-te-ripple-init
									data-te-ripple-color="light"
									className="pointer-events-none rounded-full uppercase leading-normal text-white"
								>
									{/* <!-- Facebook --> */}
									<FaGoogle className="text-c-semi-dark" />
								</button>
								<div>Signin With Google</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default login;
