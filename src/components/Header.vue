<template>
  <header>
    <div class="flex justify-between mt-5">
      <div class="flex pl-5 cursor-pointer">
        <RouterLink to="/"> <img class="w-12 mr-5" src="/logo.svg" alt="логотип" /></RouterLink>
      </div>

      <div class="flex items-center">
        <ul class="flex gap-10 px-10 left-20px">
          <li class="mt-1 font-medium pr-5 cursor-pointer text-lg hover:text-orange-500">
            <RouterLink to="/about"> About Me</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>


