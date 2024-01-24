# -*- coding: utf-8 -*-
from bloatectomy import bloatectomy



#bloatectomy(text, style='highlight',  output='html')

bloatectomy('typescript_test.tsx', style='highlight', display=True, filename='./output/sample_txsfewft_output', output='tsx', output_numbered_tokens=True, output_original_tokens=True)
'''
bloatectomy('test.txt',
             filename='./output/sampletxt_output',
             style='highlight',
             output='html',
             output_numbered_tokens=True,
             output_original_tokens=True )
'''

#bloatectomy(text, style='bold', display=False, filename='sample_output2', output='html')
