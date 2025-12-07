import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const todos = [
  {
    id: 1,
    title: "Sample Todo",
    description: "This is a sample todo description.",
  },
  {
    id: 2,
    title: "Another Todo",
    description: "This is another sample todo description.",
  },
];

const tableHeaders = [
  "No",
  "Title",
  "Description",
  "Priority",
  "Deadline",
  "Categories",
  "Completed",
];

const page = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="container mx-auto flex justify-center">
        <Card className="w-3/4">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">MY TODOS</CardTitle>
            <CardAction>
              <Button>Add Todo</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  {tableHeaders.map((header) => (
                    <TableHead
                      key={header}
                      className="text-primary text-xl font-semibold uppercase"
                    >
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {todos.map((todo, index) => (
                  <TableRow key={todo.id}>
                    <TableCell className="text-center text-lg">
                      {index + 1}
                    </TableCell>
                    <TableCell className="text-lg font-semibold">
                      {todo.title}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-lg">
                      {todo.description}
                    </TableCell>
                    <TableCell className="text-lg">-</TableCell>
                    <TableCell className="text-lg">-</TableCell>
                    <TableCell className="text-lg">-</TableCell>
                    <TableCell className="text-lg">-</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
