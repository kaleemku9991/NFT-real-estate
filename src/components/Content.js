import React, { Component } from 'react'
import AddLand from './AddLand';
import LandsForSale from './LandsForSale';
import ListLand from './ListLand';
import SoldLands from './SoldLands';

class Content extends Component {
  render() {
    const { addLand, lands, buyLand, account, listLand } = this.props
    return (
      <div id="content">
        <p></p>
        {
          account === '0xB2dC868d92bD95484d10FDC98CFfa4Ccc7b1877f' ? // modify to contract owner
            <AddLand addLand={addLand} /> :
            <div></div>
        }
        <p>&nbsp;</p>
        <LandsForSale lands={lands} buyLand={buyLand} account={account} />
        <p>&nbsp;</p>
        <ListLand listLand={listLand} />
        <p>&nbsp;</p>
        <SoldLands lands={lands} account={account} listLand={listLand} />
      </div>
    )
  }
}

export default Content
