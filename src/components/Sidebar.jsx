import React from "react";
import Favourite from "../assets/icons//favourite.svg";
import CommingSoon from "../assets/icons/commingSoon.svg";
import NewRelease from "../assets/icons/newRelease.svg";
import Trending from "../assets/icons/trending.svg";
import WatchLater from "../assets/icons/watchLater.svg";

export default function Sidebar() {
  return (
    <aside>
      <ul class="space-y-2">
        <li>
          <a
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img src={Trending} width="24" height="24" alt="Trending" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={NewRelease} width="24" height="24" alt="NewRelease" />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={CommingSoon} width="24" height="24" alt="CommingSoon" />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={Favourite} width="24" height="24" alt="Favourite" />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={WatchLater} width="24" height="24" alt="WatchLater" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
