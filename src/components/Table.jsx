import { React, useMemo } from "react";
import { useTable } from "react-table";
import campaignData from "../source/campaign_data.json";
import Header from "./Header";
import "../styles/Table.css";

export default function Table() {
	const columns = useMemo(
		() => [
			{
				Header: "users",
				columns: [
					{
						Header: "id",
						accessor: "id"
					},
					{
						Header: "followers_count",
						accessor: "public_metrics.followers_count"
					},
					{
						Header: "following_count",
						accessor: "public_metrics.following_count"
					},
					{
						Header: "tweet_count",
						accessor: "public_metrics.tweet_count"
					},
					{
						Header: "listed_count",
						accessor: "public_metrics.listed_count"
					},
					{
						Header: "name",
						accessor: "name"
					},
					{
						Header: "username",
						accessor: "username"
					}
				]
			}
		],
		[]
	);

	const data = useMemo(() => campaignData.users, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow
	} = useTable({
		columns,
		data
	});

	return (
		<div>
			<Header />
			<div className="filters">
				<input
					type="search"
					class="filter_inputs"
					name="search"
					id="search"
					placeholder="seach here"
				/>
				<input type="button" value="search" id="btn-search" />
			</div>
			<div id="tweets">
				<table {...getTableProps()} id="table">
					<thead>
						{headerGroups.map(headerGroup =>
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column =>
									<th {...column.getHeaderProps()}>
										{column.render("Header")}
									</th>
								)}
							</tr>
						)}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row, i) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map(cell => {
										return (
											<td {...cell.getCellProps()}>
												{cell.render("Cell")}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div class="btn-btn-align">
				<button id="btn-next">Next</button>
				<button id="btn-previous">Previous</button>
			</div>
		</div>
	);
}
