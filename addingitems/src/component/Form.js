import React from 'react';
export default class Form extends React.Component {
    render() {
        return (
            <div>
                <h1>Products Form:</h1>  
                <form name="product" id="product" method="post">
                    <table>
                        <tr>
                            <td><label for="customer">Customer Name</label></td>
                            <td><input type="text" name="customer" id="customer"/></td>
                        </tr>
                        <tr>
                            <td><label for="product">Product</label></td>
                            <td>
                                <select name="product" id="product">
                                    <option value="shampoo">Shampoo</option>
                                    <option value="powder">Powder</option>
                                    <option value="honey">Honey</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Rate</label></td>
                            <td><label></label></td>
                        </tr>
                        <tr>
                            <td><label>Unit</label></td>
                            <td><label></label></td>
                        </tr>
                        <tr>
                            <td><label for="qty">Qty</label></td>
                            <td><input type="text" name="qty" id="qty"/></td>
                        </tr>
                        <tr>
                            <td><label for="discount">Discount (%)</label></td>
                            <td><input type="text" name="discount" id="discount"/></td>
                        </tr>
                        <tr>
                            <td><label>Net Amount</label></td>
                            <td><label></label></td>
                        </tr>
                        <tr>
                            <td><label>Total Amount</label></td>
                            <td><label></label></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="button" name="add" id="add">+ ADD</button>
                            </td>
                        </tr>
                      </table>
                </form> 
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Rate</th>
                            <th>Unit</th>
                            <th>Qty</th>
                            <th>Disc%</th>
                            <th>Net Amt.</th>
                            <th>Total Amt.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>
                            <select name="product" id="product">
                                <option value="shampoo">Shampoo</option>
                                <option value="powder">Powder</option>
                                <option value="honey">Honey</option>
                            </select>
                        </td>
                        <td><label></label></td>
                        <td><label></label></td>
                        <td><input type="text" name="quantity" id="quantity"/></td>
                        <td><input type="text" name="disc" id="disc"/></td>
                        <td><label></label></td>
                        <td><label></label></td>
                        <td>X REMOVE</td>
                    </tr>
                </table>
                <button type="submit" name="submit" id="submit">SUBMIT</button>
            </div>
        );
    }
}