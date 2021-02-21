

export class  MyBudgets {
  constructor(
    public id: string,
    public name: string,
    public last_modified_on: string,
    public first_month: string,
    public last_month: string,
    public date_format: Dateformat,
    public currency_format: Currencyformat
  ){}
}

interface Currencyformat {
  iso_code: string;
  example_format: string;
  decimal_digits: number;
  decimal_separator: string;
  symbol_first: boolean;
  group_separator: string;
  currency_symbol: string;
  display_symbol: boolean;
}

interface Dateformat {
  format: string;
}