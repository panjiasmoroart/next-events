import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import EventSearch from "../components/events/event-search";

export default function HomePage() {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </Fragment>
  );
}
