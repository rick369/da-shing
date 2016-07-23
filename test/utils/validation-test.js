import { expect } from 'chai';

import { validation } from '../../src/utils';

// https://dotblogs.com.tw/hatelove/archive/2012/05/08/unit-test-introduction.aspx

describe('validation util', () => {

  describe('email method', () => {
    it('should null when email is ben@gmail.com', () => {
      // arrange
      const target = validation; // 初始化目標物件
      const email = 'ben@gmail.com'; // 所需要使用到的參數
      const expected = null; // 設定期望結果
      let actual;

      // act 指「呼叫測試目標類別上，要測試的方法」
      actual = target.email(email); // 實際呼叫測試目標物件的方法

      //assert 指 「驗證預期結果與Act所得到的實際結果，是否符合」
      expect(expected).to.equal(actual);
    });

    it('should not null when email is ben', () => {
      // arrange
      const target = validation; // 初始化目標物件
      const email = 'ben'; // 所需要使用到的參數
      const expected = !null; // 設定期望結果
      let actual;

      // act 指「呼叫測試目標類別上，要測試的方法」
      actual = !!target.email(email); // 實際呼叫測試目標物件的方法

      //assert 指 「驗證預期結果與Act所得到的實際結果，是否符合」
      expect(expected).to.equal(actual);
    });
  });

  describe('required method', () => {
    it('should null when 有輸入值時', () => {
      // arrange
      const target = validation; // 初始化目標物件
      const value = 'ben'; // 所需要使用到的參數
      const expected = null; // 設定期望結果
      let actual;

      // act 指「呼叫測試目標類別上，要測試的方法」
      actual = target.required(value); // 實際呼叫測試目標物件的方法

      //assert 指 「驗證預期結果與Act所得到的實際結果，是否符合」
      expect(expected).to.equal(actual);
    });

    it('should not null when 沒有有輸入值時', () => {
      // arrange
      const target = validation; // 初始化目標物件
      const value = ''; // 所需要使用到的參數
      const expected = !null; // 設定期望結果
      let actual;

      // act 指「呼叫測試目標類別上，要測試的方法」
      actual = !!target.required(value); // 實際呼叫測試目標物件的方法

      //assert 指 「驗證預期結果與Act所得到的實際結果，是否符合」
      expect(expected).to.equal(actual);
    });
  });

  describe('minLength method', () => {
    it('should null when min 是 4 而且 value 是 ben@gmail.com', () => {
      // arrange
      const target = validation; // 初始化目標物件
      const min = 4; // 所需要使用到的參數
      const value = 'ben@gmail.com'; // 所需要使用到的參數
      const expected = null; // 設定期望結果
      let actual;

      // act 指「呼叫測試目標類別上，要測試的方法」
      actual = target.minLength(min)(value); // 實際呼叫測試目標物件的方法

      //assert 指 「驗證預期結果與Act所得到的實際結果，是否符合」
      expect(expected).to.equal(actual);
    });

    it('should not null when min 是 4 而且 value 是 ben', () => {
      // arrange
      const target = validation; // 初始化目標物件
      const min = 4; // 所需要使用到的參數
      const value = 'ben'; // 所需要使用到的參數
      const expected = !null; // 設定期望結果
      let actual;

      // act 指「呼叫測試目標類別上，要測試的方法」
      actual = !!target.minLength(min)(value); // 實際呼叫測試目標物件的方法

      //assert 指 「驗證預期結果與Act所得到的實際結果，是否符合」
      expect(expected).to.equal(actual);
    });
  });
});
