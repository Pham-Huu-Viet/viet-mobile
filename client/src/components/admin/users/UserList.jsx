import { Edit, Lock, Shield, Trash, Trash2, Unlock } from "lucide-react";
import { dataUsersMock } from "../../../mock/admin/dataUsers";
import { showPrice } from "../../../function/showPrice";

export default function UserList() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse text-sm">
        <thead className="border-border-gray-20 border-b">
          <tr>
            <th>User</th>
            <th>Contact</th>
            <th>Role</th>
            <th>Status</th>
            <th>Orders</th>
            <th>Total Spent</th>
            <th>Joined At</th>
            <th>Last Login</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="divide-border-gray-20 divide-y">
          {dataUsersMock.map((user, index) => (
            <tr key={index}>
              {/* image + name */}
              <td>
                <div className="flex-start gap-3">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div>{user.name}</div>
                  </div>
                </div>
              </td>

              {/* contact */}
              <td>
                <div className="flex-col-start">
                  <div>{user.email}</div>
                  <div>{user.phone}</div>
                </div>
              </td>

              {/* Role */}
              <td>
                <div>{user.role}</div>
              </td>

              {/* Status */}
              <td>
                <div>{user.status}</div>
              </td>

              {/* Orders */}
              <td>
                <span>{user.orders}</span>
              </td>

              {/* totalSpent */}
              <td>
                <span className="flex-end">{showPrice(user.totalSpent)}</span>
              </td>

              {/* joinedAt */}
              <td>
                <span className="whitespace-nowrap">{user.joinedAt}</span>
              </td>

              {/* lastLogin */}
              <td>
                <span className="whitespace-nowrap">{user.lastLogin}</span>
              </td>

              <td className="text-right">
                <div className="flex-end gap-2">
                  <div className="btn-icon-in-card-sm">
                    <Edit />
                  </div>

                  <div className="btn-icon-in-card-sm text-cancel">
                    <Trash2 />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
