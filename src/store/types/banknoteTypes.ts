export enum BanknoteEnum {
  /*eslint-disable */
  OneThousand = 0,
  FiveHundred = 1,
  OneHundred = 2,
  Fifty = 3,
  Ten = 4,
  Five = 5,
  One = 6,
  /* eslint-enable */
}

export const banknoteDenominals = {
  [BanknoteEnum.OneThousand]: 1000,
  [BanknoteEnum.FiveHundred]: 500,
  [BanknoteEnum.OneHundred]: 100,
  [BanknoteEnum.Fifty]: 50,
  [BanknoteEnum.Ten]: 10,
  [BanknoteEnum.Five]: 5,
  [BanknoteEnum.One]: 1,
};

export type AllowingReceivingBanknotes =
  | BanknoteEnum.OneThousand
  | BanknoteEnum.FiveHundred
  | BanknoteEnum.OneHundred
  | BanknoteEnum.Fifty;

export type AllowingChangeBanknotes =
  | BanknoteEnum.FiveHundred
  | BanknoteEnum.OneHundred
  | BanknoteEnum.Fifty
  | BanknoteEnum.Ten
  | BanknoteEnum.Five
  | BanknoteEnum.One;
