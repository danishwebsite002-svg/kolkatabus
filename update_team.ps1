$content = Get-Content -Path 'index.html' -Raw -Encoding UTF8

$content = $content -replace '<h1 class="text-effect text-white"><span>guide</span> Discover the expert</h1>\s*<h1 class="text-effect text-white">Leading through nature &amp; adventure</h1>', "<h1 class=`"text-effect text-white`"><span>drivers</span> Meet our experts</h1>`r`n							<h1 class=`"text-effect text-white`">Safe, Professional, and Experienced</h1>"

$content = $content -replace '>anjelina watson<', '>Rajesh Kumar<'
$content = $content -replace '>john d. alexon<', '>Amit Sharma<'
$content = $content -replace '>Elezabeth shorna<', '>Priya Patel<'
$content = $content -replace '>david x. cornel<', '>Vikram Singh<'

$content = $content -replace '>Tour Guide<', '>Senior Captain<'
# Replace specific ones individually if needed, but since Tour Guide is repeated, I'll do regex matches or just leave them all as "Senior Captain" or use regex with match index.
# Let's just do a simple replace that sets the first to Senior Captain, second to Fleet Manager, etc.
# Actually, an easy way is to use specific replacements based on the block:
$content = $content -replace 'Rajesh Kumar</h1>\s*<p class="team-bio">Tour Guide</p>', 'Rajesh Kumar</h1>`r`n							<p class="team-bio">Senior Captain</p>'
$content = $content -replace 'Amit Sharma</h1>\s*<p class="team-bio">Tour Guide</p>', 'Amit Sharma</h1>`r`n							<p class="team-bio">Fleet Manager</p>'
$content = $content -replace 'Priya Patel</h1>\s*<p class="team-bio">Tour Guide</p>', 'Priya Patel</h1>`r`n							<p class="team-bio">Customer Relations</p>'
$content = $content -replace 'Vikram Singh</h1>\s*<p class="team-bio">Tour Guide</p>', 'Vikram Singh</h1>`r`n							<p class="team-bio">Lead Driver</p>'


Set-Content -Path 'index.html' -Value $content -Encoding UTF8
