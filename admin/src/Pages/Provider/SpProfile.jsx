import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import { Input } from "@material-tailwind/react";

const SpProfile = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleChangePassword = () => {
    if (newPassword === confirmNewPassword) {
      setPasswordChanged(true);
    } else {
      alert("New passwords don't match!");
    }
  };

  return (
    <div className="provider">
      <Sidebar />
      <div className="w-[85%] bg-slate-50 ">
        <div className="w-[100%] h-50 bg-gray-200 py-5 px-10 flex justify-between">
          <div className="w-3/4 mr-10">
            <h1 className="text-4xl mb-6">My Profile</h1>
            <div className="customer-details shadow-lg bg-white p-6 rounded-lg flex justify-between">
              <div className="">
                <div className="mb-4 flex gap-10">
                  <span>
                    <h3 className="font-bold ">First Name</h3>
                    <p className="text-gray-600">Aarushi</p>
                  </span>
                  <span>
                    <h3 className="font-bold ">Middle Name</h3>
                    <p className="text-gray-600">Rahul</p>
                  </span>
                  <span>
                    <h3 className="font-bold ">Last Name</h3>
                    <p className="text-gray-600">Goel</p>
                  </span>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold ">Gender</h3>
                  <p className="text-gray-600">Female</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold ">Address</h3>
                  <p className="text-gray-600">
                    380 Nuniya Mohalla Sadar Bazar Ahmedabad Gujarat
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold ">Email</h3>
                  <p className="text-gray-600">goel.aarushi2203@gmail.com</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold ">Phone</h3>
                  <p className="text-gray-600">9927957598</p>
                </div>
              </div>
              <div>
                <img
                  src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/shutterstock_105623048_1.jpg?itok=IcdHbI7U"
                  alt="Profile"
                  className="w-[24rem] h-[20rem] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <h1 className="text-4xl mb-6">Change Password</h1>
            <div className="changepassword shadow-lg bg-white p-6 rounded-lg flex flex-col gap-7">
              <Input
                className="input-field mb-4"
                type="password"
                label="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <Input
                className="input-field mb-4"
                type="password"
                label="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                className="input-field mb-4"
                type="password"
                label="Confirm New Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <button
                className="bg-yellow-400 py-3 px-3 rounded-md"
                onClick={handleChangePassword}
              >
                Change Password
              </button>
              {passwordChanged && (
                <p className="text-green-300">Password changed successfully!</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className=" px-20 pb-10 pl-10 bg-gray-200">
            <div class=" bg-white shadow-md rounded-lg">
              <form
                class="py-6 px-9"
                action="https://formbold.com/s/FORM_ID"
                method="POST"
              >
                <div class="mb-6 pt-4">
                  <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                    Upload File
                  </label>
                  <div className="flex gap-5 justify-evenly">
                    <div class="mb-8">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        class="sr-only"
                      />
                      <label
                        for="file"
                        class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                      >
                        <div>
                          <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                            Drop files here
                          </span>
                          <span class="mb-2 block text-base font-medium text-[#6B7280]">
                            Or
                          </span>
                          <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                            Browse
                          </span>
                        </div>
                      </label>
                    </div>
                    <span>
                      <div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                        <div class="flex items-center justify-between">
                          <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                            banner-design.png
                          </span>
                          <button class="text-[#07074D]">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                fill="currentColor"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                fill="currentColor"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="rounded-md bg-[#F5F7FB] py-4 px-20">
                        <div class="flex items-center justify-between">
                          <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                            banner-design.png
                          </span>
                          <button class="text-[#07074D]">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                fill="currentColor"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                fill="currentColor"
                              />
                            </svg>
                          </button>
                        </div>
                        <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                          <div class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-yellow-600"></div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>

                <div>
                  <button class="hover:shadow-form w-full rounded-md bg-yellow-600 py-3 px-8 text-center text-base font-semibold  outline-none">
                    Send File
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpProfile;
