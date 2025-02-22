import {
  ActionIcon,
  Center,
  Group,
  Pagination,
  Table,
  Text,
  TextInput
} from "@mantine/core";
import { useRef } from "react";
import { QueryHookResult } from "react-query-kit";
import ApiPaginationRes from "src/types/api/ApiPaginationRes";
import MyTable, { TablePDMProps } from "../MyTable";

interface TablePaginationPDMProps<T> extends Omit<TablePDMProps<T>, "data"> {
  minWidth?: number;
  title?: string;
  onSearch?: (v: string) => void;
  onPageIndex?: (v: number) => void;
  paginate?: QueryHookResult<ApiPaginationRes<T>, Error>;
  data?: T[];
}

const MyTablePagination = <T,>({
  title,
  minWidth = 720,
  onSearch,
  onPageIndex,
  paginate,
  data,
  isLoading,
  ...tableProps
}: TablePaginationPDMProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Table.ScrollContainer minWidth={minWidth}>
      {(title || onSearch) && (
        <Group className="p-2" justify="space-between">
          <Text className="text-lg font-semibold">{title}</Text>
          {onSearch && (
            <TextInput
              placeholder="Buscar"
              type="search"
              size="sm"
              onKeyDown={(e) =>
                e.key === "Enter" && onSearch(e.currentTarget.value)
              }
              ref={inputRef}
              rightSection={
                <ActionIcon
                  aria-label="Confirmar busqueda"
                  color="dark"
                  onClick={() => {
                    onSearch(inputRef.current?.value || "");
                  }}
                >
                  {/* <IconSearch /> */}
                </ActionIcon>
              }
            />
          )}
        </Group>
      )}
      <MyTable
        {...tableProps}
        data={data ?? paginate?.data?.data ?? []}
        isLoading={isLoading ?? paginate?.isPending}
      />
      {onPageIndex && (
        <Center className="mt-3 p-2">
          <Pagination
            total={0}
            // total={paginate?.data?.meta.totalPages ?? 1}
            boundaries={0}
            siblings={2}
            withEdges
            classNames={{
              dots: "hidden"
            }}
            // value={(paginate?.data?.meta.currentPage ?? 0) + 1}
            onChange={(page) => onPageIndex?.(page - 1)}
          />
        </Center>
      )}
    </Table.ScrollContainer>
  );
};

export default MyTablePagination;
