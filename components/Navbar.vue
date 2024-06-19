<script setup>
  import { useSidebarStore } from "~/stores/sidebar";

  const sidebarStore = useSidebarStore();

  const closeSidebar = () => {
    sidebarStore.changeStatus();
  };

  const data = [
    {
      id: "1",
      name: "Parent Item A",
      slug: "parent-item-a",
      title: "Parent Item A",
      description: "This is the description for Parent Item A.",
      icon: "https://www.iconfinder.com/icons/9042870/download/png/16",
      children: [
        {
          id: "2",
          name: "Child Item A-1",
          slug: "child-item-a-1",
          title: "Child Item A-1",
          description: "This is the description for Child Item A-1.",
          icon: "https://www.iconfinder.com/icons/9042871/download/png/16",
          children: [
            {
              id: "3",
              name: "Sub Child Item A-1-1",
              slug: "sub-child-item-a-1-1",
              title: "Sub Child Item A-1-1",
              description: "This is the description for Sub Child Item A-1-1.",
              icon: "https://www.iconfinder.com/icons/9042872/download/png/16",
              children: [],
            },
            {
              id: "4",
              name: "Sub Child Item A-1-2",
              slug: "sub-child-item-a-1-2",
              title: "Sub Child Item A-1-2",
              description: "This is the description for Sub Child Item A-1-2.",
              icon: "https://www.iconfinder.com/icons/9042873/download/png/16",
              children: [],
            },
          ],
        },
        {
          id: "5",
          name: "Child Item A-2",
          slug: "child-item-a-2",
          title: "Child Item A-2",
          description: "This is the description for Child Item A-2.",
          icon: "https://www.iconfinder.com/icons/9042874/download/png/16",
          children: [],
        },
      ],
    },
    {
      id: "6",
      name: "Parent Item B",
      slug: "parent-item-b",
      title: "Parent Item B",
      description: "This is the description for Parent Item B.",
      icon: "https://www.iconfinder.com/icons/9042875/download/png/16",
      children: [
        {
          id: "7",
          name: "Child Item B-1",
          slug: "child-item-b-1",
          title: "Child Item B-1",
          description: "This is the description for Child Item B-1.",
          icon: "https://www.iconfinder.com/icons/9042876/download/png/16",
          children: [],
        },
        {
          id: "8",
          name: "Child Item B-2",
          slug: "child-item-b-2",
          title: "Child Item B-2",
          description: "This is the description for Child Item B-2.",
          icon: "https://www.iconfinder.com/icons/9042877/download/png/16",
          children: [
            {
              id: "9",
              name: "Sub Child Item B-2-1",
              slug: "sub-child-item-b-2-1",
              title: "Sub Child Item B-2-1",
              description: "This is the description for Sub Child Item B-2-1.",
              icon: "https://www.iconfinder.com/icons/9042878/download/png/16",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "10",
      name: "Parent Item C",
      slug: "parent-item-c",
      title: "Parent Item C",
      description: "This is the description for Parent Item C.",
      icon: "https://www.iconfinder.com/icons/9042879/download/png/16",
      children: [
        {
          id: "11",
          name: "Child Item C-1",
          slug: "child-item-c-1",
          title: "Child Item C-1",
          description: "This is the description for Child Item C-1.",
          icon: "https://www.iconfinder.com/icons/9042880/download/png/16",
          children: [
            {
              id: "12",
              name: "Sub Child Item C-1-1",
              slug: "sub-child-item-c-1-1",
              title: "Sub Child Item C-1-1",
              description: "This is the description for Sub Child Item C-1-1.",
              icon: "https://www.iconfinder.com/icons/9042881/download/png/16",
              children: [],
            },
          ],
        },
        {
          id: "13",
          name: "Child Item C-2",
          slug: "child-item-c-2",
          title: "Child Item C-2",
          description: "This is the description for Child Item C-2.",
          icon: "https://www.iconfinder.com/icons/9042882/download/png/16",
          children: [
            {
              id: "14",
              name: "Sub Child Item C-2-1",
              slug: "sub-child-item-c-2-1",
              title: "Sub Child Item C-2-1",
              description: "This is the description for Sub Child Item C-2-1.",
              icon: "https://www.iconfinder.com/icons/9042883/download/png/16",
              children: [
                {
                  id: "15",
                  name: "Sub Sub Child Item C-2-1-1",
                  slug: "sub-sub-child-item-c-2-1-1",
                  title: "Sub Sub Child Item C-2-1-1",
                  description:
                    "This is the description for Sub Sub Child Item C-2-1-1.",
                  icon: "https://www.iconfinder.com/icons/9042884/download/png/16",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "16",
      name: "Parent Item D",
      slug: "parent-item-d",
      title: "Parent Item D",
      description: "This is the description for Parent Item D.",
      icon: "https://www.iconfinder.com/icons/9042885/download/png/16",
      children: [],
    },
    {
      id: "17",
      name: "Parent Item E",
      slug: "parent-item-e",
      title: "Parent Item E",
      description: "This is the description for Parent Item E.",
      icon: "https://www.iconfinder.com/icons/9042886/download/png/16",
      children: [],
    },
    {
      id: "18",
      name: "Parent Item F",
      slug: "parent-item-f",
      title: "Parent Item F",
      description: "This is the description for Parent Item F.",
      icon: "https://www.iconfinder.com/icons/9042887/download/png/16",
      children: [],
    },
    {
      id: "19",
      name: "Parent Item G",
      slug: "parent-item-g",
      title: "Parent Item G",
      description: "This is the description for Parent Item G.",
      icon: "https://www.iconfinder.com/icons/9042888/download/png/16",
      children: [
        {
          id: "23",
          name: "Child Item G-1",
          slug: "child-item-g-1",
          title: "Child Item G-1",
          description: "This is the description for Child Item G-1.",
          icon: "https://www.iconfinder.com/icons/9042892/download/png/16",
          children: [],
        },
        {
          id: "24",
          name: "Child Item G-2",
          slug: "child-item-g-2",
          title: "Child Item G-2",
          description: "This is the description for Child Item G-2.",
          icon: "https://www.iconfinder.com/icons/9042893/download/png/16",
          children: [],
        },
      ],
    },
    {
      id: "20",
      name: "Parent Item H",
      slug: "parent-item-h",
      title: "Parent Item H",
      description: "This is the description for Parent Item H.",
      icon: "https://www.iconfinder.com/icons/9042889/download/png/16",
      children: [],
    },
    {
      id: "21",
      name: "Parent Item I",
      slug: "parent-item-i",
      title: "Parent Item I",
      description: "This is the description for Parent Item I.",
      icon: "https://www.iconfinder.com/icons/9042890/download/png/16",
      children: [],
    },
    {
      id: "22",
      name: "Parent Item J",
      slug: "parent-item-j",
      title: "Parent Item J",
      description: "This is the description for Parent Item J.",
      icon: "https://www.iconfinder.com/icons/9042891/download/png/16",
      children: [],
    },
  ];

  const fillSidebarItems = (data) => {
    sidebarStore.saveSidebarItems(data);
  };

  onMounted(() => {
    fillSidebarItems(data);
  });
</script>

<template>
  <div class="flex items-center border-b h-[75px] px-4">
    <p class="text-4xl font-bold mr-10">Nuxi</p>
    <button
      class="transition ease-in-out delay-150 hover:scale-110 duration-300"
      @click="closeSidebar()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
