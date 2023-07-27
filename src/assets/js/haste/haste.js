'use strict';

window.onbeforeunload = function (e) {
    localStorage.removeItem('contracted');
};

const d = document;
d.addEventListener('DOMContentLoaded', function (event) {
    // Options
    const breakpoints = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
    };

    // Sidebar
    const subMenuLinks = d.querySelectorAll('#subMenuLink');

    subMenuLinks.forEach(function (subMenuLink) {
        let parentMultiLevel = subMenuLink.closest('.multi-level.collapse');
        let arrow = subMenuLink.parentNode.parentNode.parentElement.querySelector('#hasArrow');

        if (subMenuLink.classList.contains('active')) {
            let sidebarIcon = arrow.querySelector('.sidebar-icon');
            sidebarIcon.classList.add('text-secondary');

            parentMultiLevel.classList.add('show');

            if (arrow.classList.contains('collapsed')) {
                arrow.classList.remove('collapsed');
            }
        }
    });

    var sidebar = document.getElementById('sidebarMenu');
    var content = document.getElementsByClassName('content')[0];
    if (sidebar && d.body.clientWidth < breakpoints.lg) {
        sidebar.addEventListener('shown.bs.collapse', function () {
            document.querySelector('body').style.position = 'fixed';
        });
        sidebar.addEventListener('hidden.bs.collapse', function () {
            document.querySelector('body').style.position = 'relative';
        });
    }
    if (sidebar) {
        if (localStorage.getItem('sidebar') === 'contracted') {
            sidebar.classList.add('notransition');
            content.classList.add('notransition');

            sidebar.classList.add('contracted');

            setTimeout(function () {
                sidebar.classList.remove('notransition');
                content.classList.remove('notransition');
            }, 500);
        } else {
            sidebar.classList.add('notransition');
            content.classList.add('notransition');

            sidebar.classList.remove('contracted');

            setTimeout(function () {
                sidebar.classList.remove('notransition');
                content.classList.remove('notransition');
            }, 500);
        }

        var sidebarToggle = d.getElementById('sidebar-toggle');
        sidebarToggle.addEventListener('click', function () {
            if (sidebar.classList.contains('contracted')) {
                sidebar.classList.remove('contracted');
                localStorage.removeItem('sidebar', 'contracted');
            } else {
                sidebar.classList.add('contracted');
                localStorage.setItem('sidebar', 'contracted');
            }
        });

        sidebar.addEventListener('mouseenter', function () {
            if (localStorage.getItem('sidebar') === 'contracted') {
                if (sidebar.classList.contains('contracted')) {
                    sidebar.classList.remove('contracted');
                } else {
                    sidebar.classList.add('contracted');
                }
            }
        });

        sidebar.addEventListener('mouseleave', function () {
            if (localStorage.getItem('sidebar') === 'contracted') {
                if (sidebar.classList.contains('contracted')) {
                    sidebar.classList.remove('contracted');
                } else {
                    sidebar.classList.add('contracted');
                }
            }
        });
    }

    // Notification Icon
    var iconNotifications = d.querySelector('.notification-bell');
    if (iconNotifications) {
        iconNotifications.addEventListener('shown.bs.dropdown', function () {
            iconNotifications.classList.remove('unread');
        });
    }

    [].slice.call(d.querySelectorAll('[data-background]')).map(function (el) {
        el.style.background = 'url(' + el.getAttribute('data-background') + ')';
    });

    [].slice
        .call(d.querySelectorAll('[data-background-lg]'))
        .map(function (el) {
            if (document.body.clientWidth > breakpoints.lg) {
                el.style.background =
                    'url(' + el.getAttribute('data-background-lg') + ')';
            }
        });

    [].slice
        .call(d.querySelectorAll('[data-background-color]'))
        .map(function (el) {
            el.style.background =
                'url(' + el.getAttribute('data-background-color') + ')';
        });

    [].slice.call(d.querySelectorAll('[data-color]')).map(function (el) {
        el.style.color = 'url(' + el.getAttribute('data-color') + ')';
    });

    // LoadOnClick
    if (d.getElementById('loadOnClick')) {
        d.getElementById('loadOnClick').addEventListener('click', function () {
            var button = this;
            var loadContent = d.getElementById('extraContent');
            var allLoaded = d.getElementById('allLoadedText');

            button.classList.add('btn-loading');
            button.setAttribute('disabled', 'true');

            setTimeout(function () {
                loadContent.style.display = 'block';
                button.style.display = 'none';
                allLoaded.style.display = 'block';
            }, 1500);
        });
    }

    // Get Current Year
    if (d.querySelector('.current-year')) {
        d.querySelector('.current-year').textContent = new Date().getFullYear();
    }
});
