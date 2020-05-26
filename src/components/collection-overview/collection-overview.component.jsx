import React from 'react'
import { connect } from 'react-redux';
import './collection-overview.style.scss';
import { createStructuredSelector } from 'reselect';
import {selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import PreviewCollection from '../preview-collection-component/preview-collection.component'
const CollectionsOverview = ({ collections })=>(
    <div className= 'collections-overview'>
    {
        collections.map(({id, ...otherCollectionProps})=>(
            <PreviewCollection key={id} {...otherCollectionProps}/>
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})     

export default connect(mapStateToProps)(CollectionsOverview)