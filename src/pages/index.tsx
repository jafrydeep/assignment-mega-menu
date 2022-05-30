/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { submenu, dropdownTypes, subCat } from '../type';
import getCategories from './queryCountries.graphql';
import sampleData from './sample.json';

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(getCategories);
  const [dummyData, setDummyData] = useState<any[]>(sampleData);

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      {/* Render menu from state */}
      <div className="mainmenu">
        <ul className="lzd-site-menu-root">
          {dummyData.map((item: dropdownTypes) => (
            <li
              key={item.id}
              className={`lzd-site-menu-root ${
                item?.subCategory?.length > 0 ? `li_hc` : `li_nc`
              }`}
            >
              <a>{item.name}</a>
              {item?.subCategory?.length > 0 && (
                <ul className="ul_ch sub">
                  {item.subCategory.map((subitem: subCat) => (
                    <li
                      key={subitem.id}
                      className={`${
                        subitem?.products?.length > 0 ? `li_hc` : `li_nc`
                      }`}
                    >
                      <a>{subitem.name}</a>
                      {subitem?.products.length > 0 && (
                        <ul className="ul_ch sub">
                          {subitem?.products?.map((innerSubItem: submenu) => (
                            <li key={innerSubItem.id} className="li_nc">
                              <a>{innerSubItem.name}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* render menu and submenu from API */}
      {/* <div className="mainmenu">
        <ul className="lzd-site-menu-root">
          {data?.getCategories?.result?.categories
            .slice(0, 10)
            .map((item: dropdownTypes) => (
              <li
                key={item.id}
                className={`lzd-site-menu-root ${
                  item?.subCategory?.length > 0 ? `li_hc` : `li_nc`
                }`}
              >
                <a>{item.name}</a>
                {item?.subCategory?.length > 0 && (
                  <ul className="ul_ch sub">
                    {item.subCategory.map((subitem: subCat) => (
                      <li
                        key={subitem.id}
                        className={`${
                          subitem?.products?.length > 0 ? `li_hc` : `li_nc`
                        }`}
                      >
                        <a>{subitem.name}</a>
                        {subitem?.products.length > 0 && (
                          <ul className="ul_ch sub">
                            {subitem?.products?.map((innerSubItem: submenu) => (
                              <li key={innerSubItem.id} className="li_nc">
                                <a>{innerSubItem.name}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Home;
