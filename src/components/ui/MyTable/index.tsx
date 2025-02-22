"use client";
import { Center, Loader, Table } from "@mantine/core";
import {
  ColumnDef,
  Row,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import EmptyState from "../EmptyState";
export interface TablePDMProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  highlightOnHover?: boolean;
  isLoading?: boolean;
  className?: string;
  onRowClick?: (row: Row<T>) => void;
}

const MyTable = <T,>({
  data,
  columns,
  highlightOnHover,
  isLoading,
  className,
  onRowClick
}: TablePDMProps<T>) => {
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <Table
      highlightOnHover={!isLoading && highlightOnHover}
      className={className}
    >
      <Table.Thead>
        {getHeaderGroups().map((headerGroup) => (
          <Table.Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.Th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Table.Th>
            ))}
          </Table.Tr>
        ))}
      </Table.Thead>
      <Table.Tbody>
        {getRowModel().rows.map((row) => (
          <Table.Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Table.Td
                key={cell.id}
                onClick={() => onRowClick?.(cell.row)}
                className={onRowClick ? "cursor-pointer" : undefined}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Td>
            ))}
          </Table.Tr>
        ))}
        {isLoading && (
          <Table.Tr>
            <Table.Td colSpan={columns.length} py={20}>
              <Center>
                <Loader type="bars" />
              </Center>
            </Table.Td>
          </Table.Tr>
        )}
        {getRowModel().rows.length === 0 && !isLoading && (
          <Table.Tr>
            <Table.Td colSpan={columns.length} py={20}>
              <EmptyState label="Sin datos" />
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Tbody>
    </Table>
  );
};

export default MyTable;
