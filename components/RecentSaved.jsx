import React from "react";
import { RxPerson } from "react-icons/rx";
import { users } from "@/constant/data";

export const RecentSaved = () => {
  return (
    <div className="w-full col-span-1 bg-white p-4 rounded-lg lg:h-[70vh] h-[50vh] overflow-y-scroll">
      <h2 className="text-lg font-thin capitalize">Recent users</h2>
      <div className="flex flex-col justify-start items-start my-4 gap-4">
        {users.map((user) => (
          <div
            className="flex justify-between items-center bg-gray-100 w-full h-[80px] rounded-lg p-4"
            key={user.username}>
            <div>
              <h3 className="flex items-center gap-2">
                <div className=" bg-purple-700 hover:scale-150 p-4 text-white rounded-lg transition-all">
                  <RxPerson size={20} />
                </div>
                {user.username}
              </h3>
            </div>

            <p className="text-sm text-gray-600 font-thin tracking-wider capitalize">
              {user.user_status}
            </p>

            <div>
              <p>
                Joined date <br /> {user.login_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
