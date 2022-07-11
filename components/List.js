import React from 'react'

const List = (props) => {
    console.log(props);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                            {props.item.Item_Name}

                        </th>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Sliver
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Laptop
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {props.item.Item_Price}
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                            <a href="/" className="font-medium text-blue-600  hover:underline">Edit</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    )
}

export default List

