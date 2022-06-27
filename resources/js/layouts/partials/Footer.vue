<template>
    <div class="footer font-size-sm text-center text-muted py-3">
        <strong>{{
            $store.getters.appName + " " + $store.getters.appVersion
        }}</strong>
        &copy; {{ $store.getters.appCopyright }}
    </div>
</template>
