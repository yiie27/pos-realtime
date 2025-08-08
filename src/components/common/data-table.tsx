import { ReactNode } from "react";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import PaginationDatatable from "./pagination-data-table";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { LIMIT_LISTS } from "@/constants/data-table-constant";

export default function DataTable({
  header,
  data,
  isLoading,
  totalPages,
  currentPage,
  currentLimit,
  onChangePage,
  onChangeLimit,
}: {
  header: string[];
  data: (string | ReactNode)[][];
  isLoading?: boolean;
  totalPages: number;
  currentPage: number;
  currentLimit: number;
  onChangePage: (page: number) => void;
  onChangeLimit: (limit: number) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-4">
      <Card className="p-0">
        <Table className="w-full rounded-lg overflow-hidden">
          <TableHeader className="bg-mute sticky top-0 z-10">
            <TableRow>
              {header.map((column) => (
                <TableHead key={`th-${column}`} className="px-6 py-3 uppercase">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((row, rowIndex) => (
              <TableRow key={`tr-${rowIndex}`}>
                {row.map((column, columnIndex) => (
                  <TableCell
                    key={`tc-${rowIndex}-${columnIndex}`}
                    className="px-6 py-4"
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {data?.length === 0 && !isLoading && (
              <TableRow>
                <TableCell colSpan={header.length} className="h-24 text-center">
                  No data available
                </TableCell>
              </TableRow>
            )}
            {isLoading && (
              <TableRow>
                <TableCell colSpan={header.length} className="h-24 text-center">
                  Loading...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <Label>Limit</Label>
          <Select
            value={currentLimit.toString()}
            onValueChange={(value) => onChangeLimit(Number(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Limit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Limit</SelectLabel>
                {LIMIT_LISTS.map((limit) => (
                  <SelectItem key={limit} value={limit.toString()}>
                    {limit}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-end">
            <PaginationDatatable
              currentPage={currentPage}
              totalPages={totalPages}
              onChangePage={onChangePage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
