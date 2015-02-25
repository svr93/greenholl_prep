<?
// PHP 5.2.10 (GH)

system("uname -a");

echo "Physical memory pages free count: ";
$pageCount = system("sysctl vm.stats.vm.v_free_count | cut -f 2 -d ' '");

echo "Page size: "; // byte
$pageSize = system("sysctl vm.stats.vm.v_page_size | cut -f 2 -d ' '");

echo "Physical memory free space: ";
echo (($pageCount * $pageSize) / (1024 * 1024))." MB";
