import Sidebar from "../../../components/Dashboard/Sidebar/Sidebar";
import ChatTable from "../../../components/Admin/Sp/ChatTable";
import { ChatHead, ChatRows } from "../../../Data/Admin/Database";
import ChatBoxSp from "./ChatBoxSp";
const ChatsBoard = () => {
  return (
    <>
      <div className="provider">
        <Sidebar />
        <div className="providercontainer bg-gray-100">
          <div className="bg-white mx-[1rem] my-[3rem] p-4">
            <div className="flex items-center justify-between heading">
              <div className="listTitle ">Chat Details</div>
            </div>
            <ChatTable heads={ChatHead} rows={ChatRows} url="chatview" />
          </div>
          <div className="bg-white-100 mx-[1rem] my-[3rem] p-4">
            <ul
              role="list"
              class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-[80%]"
            >
              <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-xl">
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                  <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3">
                      <h3 class="truncate text-sm font-medium text-[#FCA311]">
                        Serena William
                      </h3>
                    </div>
                    <p class="mt-1 truncate text-sm text-gray-500">
                      2 Classic Bathrrom Cleaning
                    </p>
                    <span class="mt-1 truncate text-sm text-gray-500 ">
                      21-2-2024
                    </span>
                  </div>
                </div>
                <div>
                  <div class="-mt-px flex divide-x divide-gray-200">
                    <div class="-ml-px flex w-0 flex-1">
                      <a class="relative inline-flex w-0 flex-1 items-center justify-center  rounded-b-xl pb-3 font-bold text-white bg-[#1A3570]">
                        <ChatBoxSp />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatsBoard;
