// type SortOrderType = 'ASC' | 'DESC';

// declare interface FilterOptionsInterface {
//   table: string;
//   page?: number;
//   limit?: number;
//   sort?: string;
//   sortOrder?: SortOrderType;
//   fileds?: string[];
//   filters?: Record<string, any>;
// }

// export class ApiFeature {
//   #_queryString: string | null = null;
//   #_filterOptions = FilterOptionsInterface 

//   constructor(tableName: string) {
//     this.#_filterOptions = {
//       table: tableName,
//       page: 1,
//       limit: 10,
//       sort: "id",
//       sortOrder: "ASC",
//       fields: ["*"],
//       filters: {}
//     };
//   }

//   paginate() {}

//   filter() {}

//   limitFields() {}

//   sort() {}

//   gerQuery(): string {
//     const selectedFields = this.#_filterOptions.fields.join(', ')

//     this.#_queryString = `SELECT ${selectedFields} FROM ${this.#_filterOptions.table} `

//     return this.#_queryString;
//   }
// }
