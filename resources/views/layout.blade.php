<!DOCTYPE html>
<html>
<head>
    <title>{{ seo('title') }}</title>
    <meta charset="utf-8">
    <meta name="description" content="{{ seo('description') }}">
    <meta name="keyword" content="{{ seo('keywords') }}">
    <link href="{{ asset('assets/admin/css/app.min.css') }}" rel="stylesheet">
    @foreach($extensions as $extension)
        @if($extension->getStylesheet())
            @foreach($extension->getStylesheet() as $stylesheet)
                <link href="{{ $stylesheet }}" rel="stylesheet">
            @endforeach
        @endif
    @endforeach
    @foreach($modules as $module)
        @if($module->getStylesheet())
            @foreach($module->getStylesheet() as $stylesheet)
                <link href="{{ $stylesheet }}" rel="stylesheet">
            @endforeach
        @endif
    @endforeach
</head>
<body>
<div id="app"></div>
<script>
    window.admin = "{{ url('admin') }}";
    window.api = "{{ url('api') }}";
    window.asset = "{{ asset('assets') }}";
    window.csrf_token = "{{ csrf_token() }}";
    window.extensions = [
        @foreach($extensions as $extension)
            "{{ $extension->getIdentification() }}",
        @endforeach
    ];
    window.modules = [
        @foreach($modules as $module)
            @foreach($module->getAlias() as $alias)
            "{{ $alias }}",
            @endforeach
        @endforeach
    ];
    window.local = {!! $translations !!};
    window.upload = "{{ url('editor') }}";
    window.url = "{{ url('') }}";
    window.UEDITOR_HOME_URL = "{{ asset('assets/neditor') }}/";
</script>
<script src="{{ asset('assets/admin/js/manifest.min.js') }}"></script>
<script src="{{ asset('assets/admin/js/vendor.min.js') }}"></script>
@foreach($extensions as $extension)
    @if($extension->getScript())
        <script src="{{ $extension->getScript() }}"></script>
    @endif
@endforeach
@foreach($modules as $module)
    @if($module->getScript())
        @foreach((array)$module->getScript() as $script)
            <script src="{{ $script }}"></script>
        @endforeach
    @endif
@endforeach
<script src="{{ asset('assets/admin/js/app.min.js') }}"></script>
</body>