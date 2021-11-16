import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actionUpdateUser } from "../redux_store/actions";

const Account = (props) => {
	//redux
	const userData = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();
	//

	const [state, setState] = useState({});

	useEffect(() => {
		if (userData) setState((s) => userData);
		else setState((s) => undefined);
	}, [userData]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const updatedData = {
			name: state?.name,
			email: state?.email,
			password: state?.password,
		};
		//redux
		dispatch(actionUpdateUser(updatedData));
		//
	};

	return (
		<>
			<Link to="/" className="btn btn-secondary">
				back
			</Link>
			<div className="mt-5 md:col-span-1">
				<div className="px-4 sm:px-0">
					<h3 className="text-lg font-medium leading-6 text-gray-900">
						Profile
					</h3>
					<p className="mt-1 text-sm text-gray-600">
						This information will be displayed publicly so be careful what you
						share.
					</p>
				</div>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="relative shadow sm:rounded-md sm:overflow-hidden">
					<div className="px-4 py-5 pb-20 bg-white space-y-6">
						<div className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Name
								</label>
								<div className="mt-1 flex rounded-md shadow-sm">
									<input
										type="text"
										id="name"
										className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
										placeholder="John Doe"
										required
										value={state?.name || ""}
										onChange={(e) =>
											setState({ ...state, name: e.target.value })
										}
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email
								</label>
								<div className="mt-1 flex rounded-md shadow-sm">
									<input
										type="email"
										id="email"
										className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
										placeholder="name@example.com"
										required
										value={state?.email || ""}
										onChange={(e) =>
											setState({ ...state, email: e.target.value })
										}
									/>
								</div>
							</div>

							<div className="mb-8">
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Password
								</label>
								<div className="mt-1 flex rounded-md shadow-sm">
									<input
										type="password"
										id="password"
										className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
										placeholder="****"
										required
										value={state?.password || ""}
										onChange={(e) =>
											setState({ ...state, password: e.target.value })
										}
									/>
								</div>
							</div>
						</div>
						<div className="absolute right-5 bottom-5">
							<button className="btn btn-primary">Save</button>
						</div>
					</div>
				</div>
			</form>

			{/* 
			<form onSubmit={handleSubmit}>
				<div className="border border-gray-200 shadow my-5">
					<div className="px-4 py-5">
						<h3>Account view</h3>
					</div>
					<dl>
						<div className="border-t border-gray-200 bg-indigo-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Name</dt>
							<dd className="sm:col-span-2">
								<input
									required
									value={state?.name || ""}
									onChange={(e) => setState({ ...state, name: e.target.value })}
								/>
							</dd>
						</div>
						<div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Email</dt>
							<dl className="sm:col-span-2">
								<input
									required
									value={state?.email || ""}
									onChange={(e) =>
										setState({ ...state, email: e.target.value })
									}
								/>
							</dl>
						</div>
						<div className="bg-indigo-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Name</dt>
							<dl className="sm:col-span-2">
								<input
									required
									value={state?.password || ""}
									onChange={(e) =>
										setState({ ...state, password: e.target.value })
									}
								/>
							</dl>
						</div>
					</dl>
				</div>
				<button className="btn btn-primary">Save</button>
			</form> */}
		</>
	);
};

export default Account;
